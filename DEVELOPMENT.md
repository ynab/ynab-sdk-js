# Development

## Setup

- Install dependencies: `npm install`
- Generate latest client based on swagger spec: `npm run generate`
- Run tests: `npm test`

## Publishing

Run the "Publish" GitHub Actions workflow

## Docker Image

The `swaggerapi/swagger-codegen-cli` Docker images do not support the `linux/arm64` platform which is needed for running on the new M1 chips.
To work around this, these image(s) were rebuilt on an M1 chip and then pushed up to the `ynabdev` organization on DockerHub.

To build another version:

```
git clone https://github.com/swagger-api/swagger-codegen.git
git checkout v.2.4.14
docker build -t ynabdev/swagger-codegen-cli:2.4.14 .
docker push ynabdev/swagger-codegen-cli:2.4.14
```
