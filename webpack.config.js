const path = require('path')
module.exports = {
  module: {
    rules: [{
	    test: /js$/,
	    include: path.join(__dirname, 'src'),
	    loader: 'babel-loader'
    }]
  }
}
