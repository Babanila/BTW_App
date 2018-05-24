// models/DB_Connector.js

    var mysql = require('mysql');
    var sql = mysql.createConnection({
        host : 'localhost',
        port : 3000, // use your mysql port
        database: 'db_online_Shop',//use your own database name
        user : 'root',
        password : ''
    });
    sql.connect(function(err){
        if(err!=null) {
            console.log(err);
        }
        else {
            console.log("DB Connection successfully made");
        }
    });
module.exports.dbConnection = sql;


/*
// Connect to MongoDB

var mongoose = require('mongoose');
mongoose.connect('mongod://localhost/testForAuth');
var db = mongoose.connection;


//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
        // You are connected !
        console.log('Mongo Connected');

});

exports.dbConnection = db;

*/

