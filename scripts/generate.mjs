#!/usr/bin/env -S npx ts-node
import "jsh";

echo("Downloading latest YNAB API OpenAPI spec...");
exec(`wget https://api.ynab.com/papi/open_api_spec.yaml -O open_api_spec.yaml`);

echo("Running openapi-generator generate...");
const generatorConfigOptions = `modelPropertyNaming=original,useSingleRequestParameter=false`;
const generatorArgs = `-i ./open_api_spec.yaml -g \"typescript-fetch\" --type-mappings Date=string --additional-properties=${generatorConfigOptions} -t ./templates -o src`;
exec(`openapi-generator generate ${generatorArgs}`);

echo.green("Success!");
