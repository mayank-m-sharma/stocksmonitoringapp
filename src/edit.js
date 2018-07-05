// alert("connected")
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
	var dbUserName  = res[0].username;
	var dbEmail = res[0].email;
	var dbphone = res[0].phone;
	var dbPass  = res[0].pass
	document.getElementById('displayName').innerHTML  = " "+ dbUserName;
	document.getElementById('displayEmail').innerHTML = " "+ dbEmail;
	document.getElementById('displayPhone').innerHTML = " "+ dbphone;

var saveChanges = document.getElementById('saveChanges');
saveChanges.addEventListener('click', function(eve){

	var newUsername = document.getElementById('editUsername').value;
	var editEmail 	= document.getElementById('editEmail').value;
	var editPhone 	= document.getElementById('editPhone').value;
	var currPass 	= document.getElementById('currPass').value;
	var newPass 	= document.getElementById('newPass').value;

console.log("username = "+ newUsername)
console.log('email = '+ editEmail);
console.log('curr pass = '+ currPass);
console.log('newPass=' + newPass );
console.log("phone = "+ editPhone)

if (newUsername =="" ) {newUsername=dbUserName}
if (editEmail 	=="" ) {editEmail=dbEmail}
if (editPhone 	=="" ) {editPhone=dbphone}
// if (editPhone 	=="" ) {editPhone=dbphone}
// if (newPass 	== "") {newPass = dbPass}


var updateNameQuery = "UPDATE tbluser SET username=? WHERE id=?";
 var idVal = [
 	[newUsername,userId]
 ]
 con.query(updateNameQuery, idVal, function(err, resu){
 	if (err) {console.log(err)}
 		console.log("result of updation- "+ resu);
 })

// }

})
	
})

