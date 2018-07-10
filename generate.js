#!/usr/bin/env npx jbash

set("-x");
set("-e");

cd(`${__dirname}`);

const package = require("./package.json");
const thisFolder = $("pwd");
const specFilename = `spec-v1-swagger.json`;
const templatesPath = `./swagger-templates`;
const swaggerConfigFilename = `./config.json`;

// Download latest spec from the API
eval(`rm -f ${specFilename}`);
eval(`wget https://api.youneedabudget.com/papi/${specFilename}`);

// Replace nullable types defined as i.e. ["string", "null"] in the spec to simply "string" as the generator does not understand the nullable format.
// Examples:
//   ["string", "null"] => "string"
//   ["number", "null"] => "number"
eval(
  `sed -E -i '' 's/\\[\\"(string|number|array|boolean)\\"\\, \\"null\\"\\]/"\\1"/g' ${
    specFilename
  }`
);

// Update config file with latest package info
swaggerConfig = require(swaggerConfigFilename);
swaggerConfig.npmName = package.name;
swaggerConfig.npmVersion = package.version;
writeFile(swaggerConfigFilename, JSON.stringify(swaggerConfig, null, 2));

/// Share the current folder with docker, and then run the generator, pointing to the given template
eval(`docker run --rm -v ${
  thisFolder
}:/local swaggerapi/swagger-codegen-cli generate \
    -DmodelPropertyNaming=original \
    --type-mappings DateTime=string \
    -i "/local/${specFilename}" \
    -l "typescript-fetch" \
    -c "/local/${swaggerConfigFilename}" \
    -t "/local/swagger-templates" \
    -o "/local/src" `);
