#!/usr/bin/env node
require("jbash");
const fs = require("fs");

set("-x");
set("-e");

cd(`${__dirname}`);

const thisFolder = $("pwd");
const package = require("../package.json");
const specFilename = `spec-v1-swagger.json`;
const tempFolder = `out`;
const swaggerGeneratedOutputFolder = `${tempFolder}/out/swagger-generated-typescript-fetch`;
const apiTemplateFilename = `swagger-templates/typescript-fetch/api.mustache`;
const existingSdkFolder = `../`;

// First, we generate the client from the default Swagger generator:
if (!fs.existsSync(existingSdkFolder)) {
  throw new Error(
    `Expected the existing Typescript SDK folder to already exist: ${
      existingSdkFolder
    }`
  );
}

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
const swaggerConfigFilename = "./swagger-config-typescript.json";
swaggerConfig = require(swaggerConfigFilename);
swaggerConfig.npmName = package.name;
swaggerConfig.npmVersion = package.version;

fs.writeFileSync(swaggerConfigFilename, JSON.stringify(swaggerConfig, null, 2));

// Share the current folder with docker, and then run the generator, pointing to the given template
eval(`docker run --rm -v ${
  thisFolder
}:/local swaggerapi/swagger-codegen-cli generate \
    -DmodelPropertyNaming=original \
    --type-mappings DateTime=string \
    -i "/local/${specFilename}" \
    -l "typescript-fetch" \
    -c "/local/${swaggerConfigFilename}" \
    -t "/local/swagger-templates/typescript-fetch" \
    -o "/local/${swaggerGeneratedOutputFolder}" `);

// Now copy over the appropriate generated files to our existing SDK folder
const sdkSrcOutputFolder = `${existingSdkFolder}/src`;
const filesToCopy = ["api.ts", "configuration.ts"];
for (let tempFile of filesToCopy) {
  eval(
    `cp "${swaggerGeneratedOutputFolder}/${tempFile}" "${sdkSrcOutputFolder}/"`
  );
}

// Delete the tmp folder
eval(`rm -r ${tempFolder}`);

// Move the spec up to the root level
eval(`mv -f ${specFilename} ../`);