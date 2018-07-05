const electron = require('electron')
const path = require('path')
const remote = electron.remote
const BrowserWindow = electron.remote.BrowserWindow
var emailError = document.getElementById('emailError');
var mysql = require('mysql');
var emailNoError = document.getElementById('emailNoError');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'mayanksharma-@hotmail.com',
    pass: '!1mayankshatmega01031997'
  }
});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "minordb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});





 var insertUser = document.getElementById('insertUser').addEventListener('click', function(eve){

     var username = document.getElementById('username').value;
     var phone = document.getElementById('phone').value;
var useremail = document.getElementById('emailField').value;
    var pass = document.getElementById('passField').value;


if (username == ""|| useremail== "" || phone== "" || pass == "" ) {
  alert("some fields are missing");
  return false;
}


    var atpos = useremail.indexOf("@");
    var dotpos = useremail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=useremail.length) {
        alert("Not a valid e-mail address");
        return false;
    }



var checkSql = "SELECT email FROM tbluser WHERE email=?";
con.query(checkSql, [useremail], function(error, resu){
  if (error) {throw error}
    var emptyArr = resu[0];
  console.log(emptyArr);
  if (emptyArr != undefined) {
    // console.log(true);
    // emailNoError.innerHTML = "email is available";

    alert("email already registerd");
    // var link = document.getElementById('dummyLink2');
    // console.log(link);
    // link.click();
    // location.reload();
    console.log(username)
    console.log(useremail)
    console.log(pass)
    console.log(phone)

  }else

  var sql = "INSERT INTO tbluser (username, email, pass, phone) VALUES ?";
  
  var values = [

   [username, useremail, pass, phone],

  ]
   con.query(sql, [values], function (err, result) {
    if (err) throw err;

      var mailOptions = {
  from: 'Stocks monitoring App',
  to: useremail,
  subject: 'Registration Successful! ',
  html: '<p>Hey ' + username + ' Welcome to Stocks monitoring App <br> Go ahead start monitoring your favorite stocks now.. <br> Set a target, and sit back peacefully!, <br>We will notify you instantly.</p>'
};
    alert("you can now login");
    console.log("Number of records inserted: " + result.affectedRows);
    var lin = document.getElementById('dummyLink1');
    console.log(lin);
    lin.click();
  });

 })
});


// 



// var loginBtn = document.getElementById('logginBtn').addEventListener('click', )