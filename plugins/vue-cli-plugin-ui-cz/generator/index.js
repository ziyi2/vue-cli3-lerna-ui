module.exports = (api) => {
  api.render("./template")
  
	api.extendPackage({
		scripts: {
			"cz:changelog": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
		},
		config: {
			"commitizen": {
				"path": "node_modules/cz-customizable"
			}
		},
		commitlint:{
			"extends": [
        "@commitlint/config-conventional"
      ]
		},
		devDependencies: {
      "commitizen": "^3.0.5",
      "@commitlint/cli": "^7.2.0",
      "@commitlint/config-conventional": "^7.5.0",
      "conventional-changelog": "^3.0.5",
			"cz-customizable": "^5.2.0",
			"husky": "^1.1.1"
    },
    husky: {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    }
  })
}