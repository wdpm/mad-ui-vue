/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isPlay = !!process.env.PLAY_ENV

const config = {
  mode: isProd ? 'production' : 'development',
  // refer https://webpack.js.org/configuration/devtool/#root
  devtool: !isProd && 'eval-cheap-module-source-map',
  entry: isPlay
    ? path.resolve(__dirname, './entry-play.js')
    : path.resolve(__dirname, './entry-prod.js'),
  output: {
    path: path.resolve(__dirname, '../website-dist'),
    publicPath: '/',
    filename: isProd ? '[name].[hash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader',
          },
          // {
          //   loader: 'vue-loader',
          //   options: {
          //     compilerOptions: {
          //       preserveWhitespace: false,
          //     },
          //   },
          // },
          // {
          //   loader: path.resolve(__dirname, './md-loader/index.js'),
          // },
        ],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm-browser.js',
      examples: path.resolve(__dirname),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './website/index.html',
      filename: './index.html',
      favicon: './website/favicon.ico',
    }),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    publicPath: '/',
    contentBase: __dirname,
    overlay: true,
    port: 9000,
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
}

// config css module
const cssRule = {
  test: /\.(sass|scss|css)$/,
  use: [
    // opt in CSS modules
    {
      test: /\.css$/,
      oneOf: [
        // match `<style module>`
        {
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          ],
        }, // match `<style>` or `<style scoped>`
        {
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
  ],
}

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  }),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: JSON.stringify(true),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
  })
)
cssRule.use.unshift(MiniCssExtractPlugin.loader)
cssRule.use.unshift('style-loader')
// cssRule order: style-loader <- MiniCssExtractPlugin.loader <- css-loader <- sass-loader
config.module.rules.push(cssRule)

module.exports = config
