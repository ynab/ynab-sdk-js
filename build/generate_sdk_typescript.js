#!/usr/bin/env node
require("jbash");
const fs = require("fs");

set("-x");
set("-e");

cd(`${__dirname}`);

const thisFolder = $("pwd");
const specFilename = `spec-v1-swagger.json`;
const swaggerGeneratedOutputFolder = `out/tmp/swagger-generated-typescript-fetch`;
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

// Replace nullable types defined as ["string", "null"] in the spec to simply "string" as the generator does not understand the nullable format.
eval(`sed -E -i '' 's/\\[\\"(string|number|array|boolean)\\"\\, \\"null\\"\\]/"\\1"/g' ${specFilename}`)

// Share the current folder with docker, and then run the generator, pointing to the given template
eval(`docker run --rm -v ${
  thisFolder
}:/local swaggerapi/swagger-codegen-cli generate \
    -DmodelPropertyNaming=original \
    -i "/local/${specFilename}" \
    -l "typescript-fetch" \
    -c "/local/swagger-config-typescript.json" \
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

// The default code-generator called this file custom.d.ts, but I prefer to call it portable-fetch.d.ts, as it's more descriptive
`cp "${swaggerGeneratedOutputFolder}/custom.d.ts "${
  sdkSrcOutputFolder
}/portable-fetch.d.ts"`;
