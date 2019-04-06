module.exports = (api) => {
  api.render('./template')

  api.injectImports('src/main.js', `import './ui'`)

  api.extendPackage({

    workspaces: [
      'packages/*'
    ],

    husky: {
      hooks: {
        "post-merge": "lerna bootstrap"
      }
    },

    scripts: {
      lib: 'lerna run lib',
      bootstrap: 'lerna bootstrap'
    },

    devDependencies: {
      'webpack-node-externals': '^1.7.2',
      'less-loader': '^4.1.0'
    }
  })
}
