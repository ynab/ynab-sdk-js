#!/usr/bin/env -S npx tsx
import "jsh";
import * as yaml from "js-yaml";

usage(`\
Usage:
  ${$0} [version_type]

Example:
  ${$0} patch

Generates the API client from the latest OpenAPI spec and bumps the package
version.  version_type is major, minor, or patch and defaults to minor.\
`);

const openApiSpecFileName = "open_api_spec.yaml";

const versionType = $1 || "minor";
if (!["major", "minor", "patch"].includes(versionType)) {
  echo.red(`Invalid version type: ${versionType}`);
  usage.printAndExit();
}

echo("Downloading latest YNAB API OpenAPI spec...");
exec(
  `wget https://api.ynab.com/papi/${openApiSpecFileName} -O ${openApiSpecFileName}`
);

echo("Running openapi-generator generate...");
const generatorConfigOptions = `modelPropertyNaming=original,useSingleRequestParameter=false`;
const generatorArgs = `-i ./open_api_spec.yaml -g \"typescript-fetch\" --type-mappings Date=string --additional-properties=${generatorConfigOptions} -t ./templates -o src`;
exec(`openapi-generator generate ${generatorArgs}`);

echo('Removing `Null: "null"` from enum definitions...');
// The OpenAPI Generator adds `Null: "null"` to enum definitions when a `- null` option is present in the spec.
// The generator does not provide a way to disable this behavior, so we will remove these items manually.
exec(`find ./src/models -type f -exec sed -i '' "s/Null: 'null'//g" {} +`);

const openApiSpec = yaml.load(readFile(openApiSpecFileName));
const serverSpecVersion = openApiSpec.info.version;
const packageFile = JSON.parse(readFile("./package.json"));
packageFile.description = `Official JavaScript client for the YNAB API. API documentation available at https://api.ynab.com. Generated from server specification version ${serverSpecVersion}`;
writeFile("./package.json", JSON.stringify(packageFile, null, 2) + "\n");

echo(`Bumping package version (${versionType})...`);
exec(`npm version ${versionType} --no-git-tag-version`);

echo.green("Success!");
