#!/usr/bin/env npx jbash

set("-x");
set("-e");

const rootFolder = __dirname;
const specFilename = `spec-v1-swagger.json`;
const swaggerConfigFilename = `./config.json`;

cd(rootFolder);

// Download latest spec from the API
exec(`rm -f ${specFilename}`);
exec(`wget https://api.youneedabudget.com/papi/${specFilename}`);

// Replace nullable types defined as i.e. ["string", "null"] in the spec to simply "string" as the generator does not understand the nullable format.
// Examples:
//   ["string", "null"] => "string"
//   ["number", "null"] => "number"
exec(
  `sed -E -i '' 's/\\[\\"(string|number|integer|array|boolean)\\"\\, \\"null\\"\\]/"\\1"/g' ${specFilename}`
);

// Update config file with latest package info
const package = require("./package.json");
swaggerConfig = require(swaggerConfigFilename);
swaggerConfig.npmName = package.name;
swaggerConfig.npmVersion = package.version;
writeFile(swaggerConfigFilename, JSON.stringify(swaggerConfig, null, 2));

// Share the current folder with docker, and then run the typescript-fetch generator, pointing to the given template
exec(`docker run --rm -v ${rootFolder}:/local swaggerapi/swagger-codegen-cli generate \
    -DmodelPropertyNaming=original \
    --type-mappings DateTime=string \
    -i "/local/${specFilename}" \
    -l "typescript-fetch" \
    -c "/local/${swaggerConfigFilename}" \
    -t "/local/swagger-templates" \
    -o "/local/src" `);

// Since the typescript-fetch generate does not support docs, we will also generate using the javascript generator
// just so we can get the docs and move them over to doc/
exec(`docker run --rm -v ${rootFolder}:/local swaggerapi/swagger-codegen-cli generate \
      -i "/local/${specFilename}" \
      -l "javascript" \
      -c "/local/${swaggerConfigFilename}" \
      -o "/local/tmp" `);

exec(`rm -rf ./docs && mv ./tmp/docs ./docs && rm -rf ./tmp`);
