require( "dotenv" ).config();
const express = require( "express" );

const app = express();
const bodyParser = require( "body-parser" );
const cors = require( "cors" );
const path = require("path");
const dependenciesRetrieverRoute = require( "./routes/dependencies-retriever.route" );


app.use( cors() );
app.use( bodyParser.json() );
app.use(express.static(path.join(__dirname, "client/dist/dependency-graph-project")));
app.use( "/api", dependenciesRetrieverRoute );


const { PORT } = process.env;

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client/dist/dependency-graph-project/index.html"));
});
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` );
} );

module.exports = app;
