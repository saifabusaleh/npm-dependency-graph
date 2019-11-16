
const express = require( "express" );

const dependenciesRetrieverRoute = express.Router();
const DependencyRetrieverController = require( "../controllers/dependency-retriever.controller" );


dependenciesRetrieverRoute.route( "/" ).get( ( req, res ) => {
	res.send( "<h1>Server rootss</h1>" );
} );

dependenciesRetrieverRoute.route( "/npm-depency-retriever/:pkgName" ).get(
	DependencyRetrieverController.getPackageDependencies,
);
module.exports = dependenciesRetrieverRoute;
