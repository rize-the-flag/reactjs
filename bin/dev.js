const webpack = require( 'webpack' );
const [clientConfig, serverConfig] = require( '../webpack.config' );
const nodemon = require( 'nodemon' );
const path = require( 'path' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const express = require( 'express' );

const hmrServer = express();
const clientCompiler = webpack( clientConfig );

hmrServer.use( webpackDevMiddleware( clientCompiler, {
  publicPath: clientConfig.output.publicPath,
  serverSideRender: true,
  noInfo: true,
  watchOptions: {
    ignore: '/dist/',
  },
  writeToDisk: true,
  stats: 'error-only',
} ) );

hmrServer.use( webpackHotMiddleware( clientCompiler, {
  path: '/static/__webpack_hmr',
} ) );

hmrServer.listen( 3001, () => {
  console.log( 'HMR server started on port 3001' );
} );

const compiler = webpack( serverConfig );

compiler.run( ( err ) => {
  if (err) {
    console.log( err );
  }
  compiler.watch( {}, ( err ) => {
    if (err) {
      console.log( err );
    }
    console.log( 'Compilation was successful' );
  } );
  
  nodemon( {
             script: path.resolve( __dirname, '../dist/server/server.js' ),
             watch: [path.resolve( __dirname, '../dist/server' ),
                     path.resolve( __dirname, '../dist/client' )]
           } );
} );