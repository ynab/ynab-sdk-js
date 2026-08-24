# Development

## Setup

- Install dependencies: `npm install`
- Install [OpenAPI Generator](https://openapi-generator.tech/) (on macOS: `brew install openapi-generator`)
- Build and run tests: `npm run build && npm run test`

## Generating

Run `npm run generate`.  This will generate the API client from the latest OpenAPI spec and bump the package version.  The bump defaults to `minor`; pass `major` or `patch` to change it (`npm run generate -- patch`).  Once generated, you should open a PR and merge the changes.

## Publishing

The version that gets published is whatever `package.json` on the `main` branch says, so publishing is two steps.

1. Merge a PR that sets the new version.  `npm run generate` does this for you.  For a release that does not involve re-generating the client, run `npm version minor --no-git-tag-version` (or `major` / `patch`), which updates both `package.json` and `package-lock.json` without creating a commit or tag.
2. Run the "Publish" GitHub Actions workflow.  This builds, tests, and publishes that version to npm, then tags the commit and creates a GitHub release.

The workflow never changes the version itself.  If the version in `package.json` has already been released, the workflow fails before publishing anything.
