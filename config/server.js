const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
	.include('app/routes')
	.then('config/connection/mongodbConnection.js')
	.then('app/models')
	.then('app/controllers')
    .into(app);
    
module.exports = app;