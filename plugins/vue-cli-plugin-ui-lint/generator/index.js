module.exports = (api) => {

  api.render("./template")

  api.extendPackage({
    devDependencies: {
      "husky": "^1.1.1",
      "lint-staged": "^8.1.3"
    },
    husky: {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    }
  })
}