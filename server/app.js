require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dependenciesRetrieverRoute = require('./routes/dependencies-retriever.route');


app.use(cors());
app.use(bodyParser.json());
app.use('/api', dependenciesRetrieverRoute);


app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


module.exports = app;
