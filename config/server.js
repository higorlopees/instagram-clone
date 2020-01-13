const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const multiparty = require('connect-multiparty');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multiparty());
app.use(function(req, res, next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});

consign()
	.include('app/routes')
	.then('config/connection/mongodbConnection.js')
	.then('app/models')
	.then('app/controllers')
    .into(app);
    
module.exports = app;