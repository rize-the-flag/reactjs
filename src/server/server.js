import ReactDOM from 'react-dom/server';
import Header from '../shared/Header';
import express from 'express';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use( '/static', express.static( './dist/client' ) );

app.get( '/', ( request, response ) => {
  response.send(
    indexTemplate( ReactDOM.renderToString( Header() ) )
  );
} );

app.listen( 3000, () => {
  console.log('Server started on 3000');
} );