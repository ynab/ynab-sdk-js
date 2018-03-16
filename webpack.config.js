module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "browser/ynab.js",
    library: "ynab",
    libraryTarget: "var"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                outDir: "../dist",
                declaration: false,
                sourceMap: false
              }
            }
          }
        ]
      }
    ]
  }
};
