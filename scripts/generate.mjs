#!/usr/bin/env -S npx ts-node
import "jsh";

echo("Downloading latest YNAB API OpenAPI spec...");
exec(`wget https://api.ynab.com/papi/open_api_spec.yaml -O open_api_spec.yaml`);

echo("Running openapi-generator generate...");
const generatorConfigOptions = `modelPropertyNaming=original,useSingleRequestParameter=false`;
const generatorArgs = `-i ./open_api_spec.yaml -g \"typescript-fetch\" --type-mappings Date=string --additional-properties=${generatorConfigOptions} -t ./templates -o src`;
exec(`openapi-generator generate ${generatorArgs}`);

echo('Removing `Null: "null"` from enum definitions...');
// The OpenAPI Generator adds `Null: "null"` to enum definitions when a `- null` option is present in the spec.
// The generator does not provide a way to disable this behavior, so we will remove these items manually.
exec(`find ./src/models -type f -exec sed -i '' "s/Null: 'null'//g" {} +`);

echo.green("Success!");
