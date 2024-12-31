#!/usr/bin/env -S npx ts-node
import "jsh";
import yaml from "js-yaml";

const openApiSpecFileName = "open_api_spec.yaml";

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
writeFile("./package.json", JSON.stringify(packageFile, null, 2));

echo.green("Success!");
