var mysql = require('mysql');
const request = require('request')
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "minordb"
});



var userId = localStorage.getItem("storageName");

var query = "SELECT * FROM tbluser WHERE id=?"

var arr = [
	[userId]
]

con.query(query, arr, function(err, res){
	var username = res[0].username;
	document.getElementById('dashName').innerHTML = username;
})

var targetQuery = "SELECT * FROM tbltarget WHERE userid=?"

var arr = [
	[userId]
]

con.query(targetQuery, arr, function(err, res){
	// res.forEach(myFunction);
	 
	// for(var i =0;i< 8;i++){
	// 	console.log(i);
	// }
	res.forEach(myFunction);
var i;
	// function myFunction(res, index){
	// 	console.log("index");
	// }
	 function myFunction(item, index) {
    test.innerHTML = test.innerHTML + res[index].target+ "<br>"; 
    stockName.innerHTML = stockName.innerHTML +res[index].stock+"<br>"
    timeTarget.innerHTML =timeTarget.innerHTML+ res[index].time.toDateString()+"<br>"
    // timeSta.innerHTML = timeSta+res[index].time.toTimeString()+"<br>"
    //border.innerHTML = "<br>";
}
})



 var logOut = document.getElementById('logOut');
 logOut.addEventListener('click', function(eve){
   localStorage.removeItem("storageName");
 })