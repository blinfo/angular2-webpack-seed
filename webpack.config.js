const validate = require('webpack-validator')
module.exports = validate(require('./config/webpack.dev.js'), {
    quiet: true
  });
