const path = require("path")

module.exports = {
  apps: [
    {
      name: "koa-serve-template",
      script: `${path.resolve(
        __dirname,
        "./node_modules/.bin/ts-node"
      )} --files ${path.resolve(__dirname, "./src/serve.ts")}`,
      cwd: path.resolve(__dirname, "./"),
    },
  ],
}
