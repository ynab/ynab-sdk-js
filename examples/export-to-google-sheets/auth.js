/*
 * This library provides a function "authorize" to generate an OAuth link for
 * the Google Sheets API. After getting the code (in the redirect URL query string)
 * paste it into the console prompt.
 *
 * It will then write the token into your home folder .credentials/ for subsequent
 * API queries.
 */
const fs = require("fs");
const readline = require("readline");
const googleAuth = require("google-auth-library");
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + "/.credentials/";
const TOKEN_PATH = TOKEN_DIR + "sheets.googleapis.com-ynab-example.json";

module.exports = authorize;
function authorize(secrets, cb) {
    const clientSecret = secrets.google.client_secret;
    const clientId = secrets.google.client_id;
    const redirectUrl = secrets.google.redirect_url;
    const auth = new googleAuth();
    const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
    fs.readFile(TOKEN_PATH, function(err, token) {
        if (err) {
            getNewToken(oauth2Client, cb);
        } else {
            oauth2Client.credentials = JSON.parse(token);
            cb(oauth2Client);
        }
    });
}

function getNewToken(oauth2Client, callback) {
    var authUrl = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES
    });
    console.log("Authorize this app by visiting this url: ", authUrl);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter the code from that page here: ", function(code) {
        rl.close();
        oauth2Client.getToken(code, function(err, token) {
            if (err) {
                console.log("Error while trying to retrieve access token", err);
                return;
            }
            oauth2Client.credentials = token;
            storeToken(token);
            callback(oauth2Client);
        });
    });
}

function storeToken(token) {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if (err.code != "EEXIST") {
            throw err;
        }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), function() {});
    console.log("Token stored to " + TOKEN_PATH);
}
