const express = require('express'); 
const app = express();

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "34.72.88.169",
  user: "root",
  password: "deltadev",
  database: "deltadev"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  sql = "select * from PROJLIST;"
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.get('/', function (req, res) {
	res.send('Hello World Express'); 
}); 

app.listen(8088);