const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  // To see original source
  devtool: 'cheap-module-eval-source-map',

  resolve: {
    // Import js and jsx file without using extensions
    extensions: ['.js', '.jsx'],
    // To import scss stuff easily
    alias: {
      scss: path.resolve(__dirname, 'src/scss/')
    }
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: ['> 1%', 'last 2 versions']
                    }
                  }
                ],
                'react',
                'stage-2'
              ]
            }
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // Enable CSS modules to encapsulate component`s styling
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',

              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              // webpack requires an identifier (ident) in options
              // when required function is used (e.g. autoprefixer)
              ident: 'postcss',
              plugins: () => {
                return [
                  autoprefixer({
                    browsers: ['> 1%', 'last 2 versions']
                  })
                ]
              }
            }
          },
          'sass-loader'
        ]
      }

    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  
  // Since webpack 4 webpack.optimize.uglifyjsplugin has been removed
  // Optimization config would be considered with production mode enabled
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}
