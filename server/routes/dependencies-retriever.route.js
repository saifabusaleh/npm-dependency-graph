
const express = require('express');

const dependenciesRetrieverRoute = express.Router();
const DependencyRetrieverController = require('../controllers/dependency-retriever.controller');


dependenciesRetrieverRoute.route('/').get((req, res) => {
  res.send('<h1>Server root</h1>');
});

dependenciesRetrieverRoute.route('/npm-depency-retriever').post(
  DependencyRetrieverController.getPackageDependencies,
);
module.exports = dependenciesRetrieverRoute;
