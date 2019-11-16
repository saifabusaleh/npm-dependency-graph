require( "dotenv" ).config();
const express = require( "express" );

const app = express();
const bodyParser = require( "body-parser" );
const cors = require( "cors" );
const dependenciesRetrieverRoute = require( "./routes/dependencies-retriever.route" );


app.use( cors() );
app.use( bodyParser.json() );
app.use( "/api", dependenciesRetrieverRoute );


const { PORT } = process.env;

app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` );
} );
