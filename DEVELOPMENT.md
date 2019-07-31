# Development

## Setup

- Install docker [https://docs.docker.com/install/]
- Install dependencies: `npm install`
- Generate latest client based on swagger spec: `npm run generate` or `npm run generate_win32` for Windows environment
- Run tests: `npm test`

## Releasing

- Commit all changes
- Run `npm run release` to publish to npm
