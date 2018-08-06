const mysql = require('mysql');

const hostname = "localhost";
const username = "root";
const password = "";
const dbname = "dbcom";
var query = (query) => {
    const connection = mysql.createConnection({
        hostname: hostname,
        user: username,
        password: password,
        database: dbname
    });
    connection.connect((err) => {
        if (err) throw err;
    });
    connection.query(query,(error,result,field)=>{
        return result;
    });
}

module.exports = {
    query
};
