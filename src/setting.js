var mysql = require('mysql');
const request = require('request')
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "minordb"
});



var userId = localStorage.getItem("storageName");


var query = "SELECT * FROM tbluser WHERE id=?";

var arr=[

	[userId]

]

con.query(query, arr, (err, res)=>{
	if (err) {console.log(err)}

	document.getElementById('displayName').innerHTML  = " "+ res[0].username;
	document.getElementById('displayEmail').innerHTML = " "+ res[0].email;
	document.getElementById('displayPhone').innerHTML = " "+ res[0].phone;
	
})