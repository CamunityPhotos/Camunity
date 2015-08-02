var Config = require("./config");
var Mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       

//Check with heroku
var dbtype; 

//REMOTE DB
Mongoose.connect(Config.database.dburl, options);
dbtype = "remote DB";

//LOCAL DB
// Mongoose.connect('mongodb://127.0.0.1:27017/camunity');
// dbtype = "local DB";


var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
	console.log("Connected to " + dbtype);
});