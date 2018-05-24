// models/user.js
// ,'"+req.body.address+"','"+req.body.mobile_no+"','"+req.body.email+"','"+req.body.password+"'

var dbConnector = require('./dbConnection').dbConnection;

module.exports.register = function(req,res,next){
    var query = "INSERT INTO tbl_user(name,surname) VALUES('"+req.body.name+"','"+req.body.surname+"' )";
    dbConnector.query(query,function (err,result) {
        if(err){
            res.send(err.message);
        }else{
            res.send('Done');
        }
    })
}
