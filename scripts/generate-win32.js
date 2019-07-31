// Generate latest client from spec (Windows)

/**
 * Download a file to a specified filename
 *
 * @param {string} url file download uri
 * @param {string} destFile filename to store the downloaded content in
 * @returns
 */
function downloadFile(url, destFile) {
  const http = require('https');
  const fs = require('fs');
  return new Promise((resolve,reject) => {
    try {
      const file = fs.createWriteStream(destFile);
      http.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve());
        });
      }).on('error', (err) => {
        fs.unlink(dest); // don't need to wait for result
        reject(err.message);
      });
    } catch (e) {
      reject(e);
    }
  });
};

const rootFolder = require("path").join(__dirname, "../");
const specFilename = `spec-v1-swagger.json`;
const swaggerConfigFilename = `config.json`;
const process = require('process');
const rimraf = require('rimraf');

let download;
process.chdir(rootFolder);
if (process.argv.indexOf("--useLocalSpec") > -1) { // stick with the local spec
  console.log(`WARNING: --useLocalSpec passed in so the local spec file (spec-v1-swagger.json) will be used.`)
  download = Promise.resolve();
} else { // Download latest spec from the API
  // delete old spec
  rimraf.sync(specFilename);
  // download new spec
  download = downloadFile(`https://api.youneedabudget.com/papi/${specFilename}`, specFilename);
}
download.then(() => {
  // Update config file with latest package info
  const package = require("../package.json");
  swaggerConfig = require(`../${swaggerConfigFilename}`);
  swaggerConfig.npmName = package.name;
  swaggerConfig.npmVersion = package.version;
  require('fs').writeFileSync(swaggerConfigFilename, JSON.stringify(swaggerConfig, null, 2));

  // Share the current folder with docker, and then run the typescript-fetch generator, pointing to the given template
  const proc = require('child_process').spawnSync(`docker run --rm -v ${rootFolder}:/local swaggerapi/swagger-codegen-cli:latest generate \
    -DmodelPropertyNaming=original \
      --type-mappings DateTime=string \
      -i "/local/${specFilename}" \
      -l "typescript-fetch" \
      -c "/local/${swaggerConfigFilename}" \
      -t "/local/swagger-templates" \
      -o "/local/src"`,[], {
        shell: true,
        encoding: 'utf8',
        stdio: "inherit"
      });
  return proc.status;

}).catch(err => {
  throw err; // let the caller handle it
});
