const path = require( 'path' );

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  entry: path.resolve( __dirname, '../src/client/index.js' ),
  output: {
    path: path.resolve( __dirname, '../dist/client' ),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      }
    
    ]
  },
  devtool: IS_DEV ? 'eval' : false,
};
