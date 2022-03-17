module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {  
                sourceMap: true,
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            }
          ],
        }
      ],
    },
  };