module.exports = (api) => {
  api.render("./template")

  api.extendPackage({

    workspaces: [
      "packages/*"
    ],

    scripts: {
      lib: "lerna run lib",
      bootstrap: "lerna bootstrap"
    },

    devDependencies: {
      "webpack-node-externals": "^1.7.2",
      "less-loader": "^4.1.0"
    }
  })
}