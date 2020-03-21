require( "dotenv" ).config();
const express = require( "express" );

const app = express();
const bodyParser = require( "body-parser" );
const cors = require( "cors" );
const path = require("path");
const dependenciesRetrieverRoute = require( "./server/routes/dependencies-retriever.route" );


app.use( cors() );
app.use( bodyParser.json() );
app.use( "/api", dependenciesRetrieverRoute );


const { PORT } = process.env;
app.use(express.static(path.join(__dirname, "public")));
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` );
} );

module.exports = app;
