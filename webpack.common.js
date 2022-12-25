const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const json5 = require('json5');

module.exports = {
  entry: {
    index: './src/index.js',
    rest: './src/rest.js',
    meals: './src/meals.js',
    underConstruct: './src/underConstruct.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Order your meal!',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'All Restaurants',
      filename: 'rest.html',
      chunks: ['rest'],
    }),
    new HtmlWebpackPlugin({
      title: 'All meals',
      filename: 'meals.html',
      chunks: ['meals'],
    }),
    new HtmlWebpackPlugin({
      title: 'Under Construction',
      filename: 'underconstruct.html',
      chunks: ['underConstruct'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
