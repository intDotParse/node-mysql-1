// include express
const express = require('express');
let app = express();
// connect to mysql DB
const mysql = require('mysql');
const db = mysql.createConnection({
    hostname: "localhost",
    user: "root",
    password: "",
    database: "dbcom"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("mysqli connected");
});

// routes
app.get('/adduser', (req, res) => {
    let user = {
        fn: "art",
        ln: "cabrillos",
        email: "a@y.com"
    };
    let sql = 'INSERT INTO tbluser SET ?';
    let query = db.query(sql, user, (err, result, field) => {
        if(err) throw err;
        res.send('added user!');
    });
});

app.get('/getusers',(req,res)=>{
    let sql = 'SELECT * FROM tbluser';
    let query = db.query(sql, (err, result, field) => {
        if(err) throw err;
        console.log(result);
        res.send('fetched user!');
    });
});

app.get('/getuser/:id',(req,res)=>{
    let sql = `SELECT * FROM tbluser where id=${req.params.id}`;
    let query = db.query(sql, (err, result, field) => {
        if(err) throw err;
        console.log(result);
        res.send('fetched user!');
    });
});

app.listen("3000", () => {
    console.log("server started @ port 3000");
});