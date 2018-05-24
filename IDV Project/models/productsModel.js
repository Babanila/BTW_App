var dbConnector = require('./dbConnection');
var dbConnection = dbConnector.dbConnection();

exports.productAdd = function () {
        db.query('INSERT INTO tbl_product SET ?', params.function(err))
};