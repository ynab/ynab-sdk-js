#!/usr/bin/env npx jbash

set("-x");
set("-e");

const rootFolder = require("path").join(__dirname, "../");
const specFilename = `spec-v1-swagger.json`;
const swaggerConfigFilename = `config.json`;

cd(rootFolder);

// Download latest spec from the API
// exec(`rm -f ${specFilename}`);
// exec(`wget https://api.youneedabudget.com/papi/${specFilename}`);

// Update config file with latest package info
const package = require("../package.json");
swaggerConfig = require(`../${swaggerConfigFilename}`);
swaggerConfig.npmName = package.name;
swaggerConfig.npmVersion = package.version;
writeFile(swaggerConfigFilename, JSON.stringify(swaggerConfig, null, 2));

// Share the current folder with docker, and then run the typescript-fetch generator, pointing to the given template
exec(`docker run --rm -v ${rootFolder}:/local swaggerapi/swagger-codegen-cli:latest generate \
    -DmodelPropertyNaming=original \
    --type-mappings DateTime=string \
    -i "/local/${specFilename}" \
    -l "typescript-fetch" \
    -c "/local/${swaggerConfigFilename}" \
    -t "/local/swagger-templates" \
    -o "/local/src" `);
