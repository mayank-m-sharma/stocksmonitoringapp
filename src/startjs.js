const electron = require('electron')
const path = require('path')
const shell = require('electron').shell
const remote = electron.remote
const BrowserWindow = electron.remote.BrowserWindow
var window = remote.getCurrentWindow();
//const ipcUser = electron.ipcRenderer
 

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: 'mayanksharma-@hotmail.com',
//     pass: '!1mayankshatmega01031997'
//   }
// });

// var mailOptions = {
//   from: 'mayanksharma-@hotmail.com',
//   to: 'mayanksharmasav97@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });




 var sound = new Howl({
  src: ['../assets/sounds/strike.mp3']
});
   
  var login = new Howl({
    src: ['../assets/sounds/clay.mp3']
  })

var mysql = require('mysql');

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



var logBtn = document.getElementById('logginBtn');
;
logBtn.addEventListener('click', (eve)=>{
  var loginEmail = document.getElementById('loginEmail').value;
  var loginPass = document.getElementById('loginPass').value;

  console.log('user email = ' + loginEmail);
  console.log('user pass = ' + loginPass); 



  var checkSql = "SELECT * FROM tbluser WHERE email=?";
con.query(checkSql, [loginEmail], function(error, resu){
  if (error) {throw error}
    var emptyArr = resu[0];
  console.log(emptyArr);
  if (emptyArr == undefined) {
    // console.log(true);
    // emailNoError.innerHTML = "email is available";
    sound.play()
    alert("invalid useremail");
    
  }

else{
var dbID = resu[0].id;
// alert(dbID);
//alert(dbID);
var dbPass = resu[0].pass;
if (loginPass==dbPass) {
  
 // alert("should open index")
   // ipcUser.send('userDetail', dbID);
   login.play();
   localStorage.setItem("storageName",dbID);
  var lin = document.getElementById('dummyLink');
    console.log(lin);
    lin.click();
}
else
alert("Incorrect Email or Password");
}  

 })
})

