# Development

## Setup

- Install dependencies: `npm install`
- Install [OpenAPI Generator](https://openapi-generator.tech/) (on macOS: `brew install openapi-generator`)
- Build and run tests: `npm run build && npm run test`

## Generating

Run `npm run generate`.  This will generate the API client from the latest OpenAPI spec.  Once generated, you should open a PR and merge the changes.

## Publishing

Run the "Publish" GitHub Actions workflow.  This workflow will build, version, and publish the client based on the latest code in the `main` branch.  It is expected that re-generating the client based on the latest OpenAPI spec has already been performed and changes committed.
