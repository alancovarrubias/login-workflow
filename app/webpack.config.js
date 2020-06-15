const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@test-utils': path.resolve(__dirname, './test-utils'),
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
      {
        test: /\.module\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {modules: true, localsConvention: 'camelCaseOnly'},
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader?tsconfig=./tsconfig.json',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    historyApiFallback: true,
  },
}
