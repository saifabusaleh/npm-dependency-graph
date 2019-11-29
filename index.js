require( "dotenv" ).config();
const express = require( "express" );

const app = express();
const bodyParser = require( "body-parser" );
const cors = require( "cors" );
const path = require("path");
const dependenciesRetrieverRoute = require( "./routes/dependencies-retriever.route" );


app.use( cors() );
app.use( bodyParser.json() );
app.use( "/api", dependenciesRetrieverRoute );


const { PORT } = process.env;
app.use(express.static(path.join(__dirname, "client/dist/dependency-graph-project")));
const indexPath = path.join(__dirname, "client/dist/dependency-graph-project/index.html");
console.log("index_path ", indexPath);
app.get("/*", (req, res) => {
	res.sendFile(indexPath);
});
app.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` );
} );

module.exports = app;
