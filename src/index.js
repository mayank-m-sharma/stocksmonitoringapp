const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios')

const ipc = electron.ipcRenderer
const ipc2 = electron.ipcRenderer
const ipc3 = electron.ipcRenderer

const ipcUser = electron.ipcRenderer
const request = require('request')
const CHART = document.getElementById('myChart')
const notifyBtn3 = document.getElementById('notifyBtn3')
const notifyBtn2 = document.getElementById('notifyBtn2')
const notifyBtn = document.getElementById('notifyBtn')

var price = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')
var targetPriceBse = document.getElementById('BsetargetPrice')
var targetPriceGold = document.getElementById('GoldtargetPrice')
var targetPriceVal
var targetPriceVal1
var targetPriceVal2
var cheerio     = require('cheerio');
var headlineUrl = "https://www.news18.com/stocks/indian-stocks-market-live/";
var goldDate    = document.getElementById('goldInq');
var btcDate    = document.getElementById('BtcInq');

var bseDate     = document.getElementById('BseInq');

var goldSubmit  = document.getElementById('goldSubmit');
var BtcSubmit  = document.getElementById('BtcSubmit');

var BseSubmit   = document.getElementById('BseSubmit');
const newWinBtc = document.getElementById('newWindowBtc')
var userPlace   = document.getElementById('userNameDb')
const notifier  = require('node-notifier');


// if (document.getElementById('lineGra').checked) {
//   alert("Line ")
// }
// else  {
//   alert("bars")
// }
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Your mail carrier (e.g. gmail)',
  auth: {
    user: 'Your Email here',
    pass: 'Your password here'
  }
});

request(headlineUrl, function mute (err, res, html){
  if (!err) {
    var  $ = cheerio.load(html);
    var headlinesText = $(".mkt_div_2").text();
   // var headlinesText = extractedStr.replace("S&P", "")
    var upInc = headlinesText.includes("+");
    if (upInc) {
      var headlines = document.getElementById('headlinesPlus');
      headlines.innerHTML = headlinesText
    }
      else{
        var headlines = document.getElementById('headlinesDown');
        headlines.innerHTML = headlinesText
      }
// headlines.innerHTML = headlinesText
    //console.log()
  }
})

   
var reliance = "https://www.news18.com/stocks/refineries/reliance-industries-RI.html";

request(reliance, (err, res, val)=>{
  if (!err) {
    var  $ = cheerio.load(val);
    var headlinesText = $(".PB5").text();
   // var headlinesText = extractedStr.replace("S&P", "")
   //console.log("reliance= "+ headlinesText);
   var upInc = headlinesText.includes("+");
    if (upInc) {
      var headlines = document.getElementById('headlinesPlus2');
      headlines.innerHTML = "Reliance Live:" + headlinesText
    }
      else{
        var headlines = document.getElementById('headlinesDown2');
        headlines.innerHTML ="Reliance Live:" +  headlinesText
      }
  }
} )


// var dasb = document.getElementByClassName('nav-item');

// dasb.addEventListener('click', function(eve){
//   this.toggleClass('open');
// })

// var dasb = document.getElementById('dasbo');
// dasb.addEventListener('click', function(eve){
//   this.toggleClass('open');
// })



var mysql = require('mysql');
 var sound = new Howl({
  src: ['../assets/sounds/corona.mp3']
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


BseSubmit.addEventListener('click', function(eve){
 // console.log(goldDate.value);
 var bsePrevQuery = "SELECT * FROM tbldatabse WHERE Date=?";
 var dateVal = [

  [bseDate.value]

 ]

 con.query(bsePrevQuery,dateVal, function(err, res){
  if (err) {console.log(err)
  }
    if (res[0] == undefined) {
      alert("Data not found for this date.")
    }
    console.log(res[0].Open);

  var prevGold = document.getElementById('prevBSe');
  prevGold.innerHTML = "Sensex on " + res[0].Date.toDateString('en') + " was = " +  res[0].Open + " INR "
     })
})
// s
BtcSubmit.addEventListener('click', function(eve){
 // console.log(goldDate.value);
 var btcQuery = "SELECT * FROM tbldatabtc WHERE Date=?";
 var dateVal = [

  [btcDate.value]

 ]

 con.query(btcQuery,dateVal, function(err, res){
  if (err) {console.log(err)
  }
      if (res[0] == undefined) {
      alert("Data not found for this date.")
    }
    console.log(res[0].High);

  var prevGold = document.getElementById('prevBtc');
  prevGold.innerHTML = "Bitcoin on " + res[0].Date.toDateString('en') + " was = " +  res[0].High + " USD "
     //alert(res[0].Date)
     })
})

// var dbdate = goldDate
goldSubmit.addEventListener('click', function(eve){
 // console.log(goldDate.value);
 var goldPrevQuery = "SELECT * FROM tbldatagold WHERE Date=?";
 var dateVal = [

  [goldDate.value]

 ]

 con.query(goldPrevQuery,dateVal, function(err, res){
  if (err) {console.log(err)
  }
      if (res[0] == undefined) {
      alert("Data not found for this date.")
    }
    console.log(res[0].Open);

  var prevGold = document.getElementById('prevGold');
  prevGold.innerHTML = "Gold price on " + res[0].Date.toDateString('en') + " was = " +  res[0].Open + " INR "
     //alert(res[0].Date)
     })
})
// 
//mailing
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//    
//   }
// });


// var logOut = document.getElementById('logOut').addEventListener('click', (eve){
//   localStorage.removeItem("storageName");
// })
 var logOut = document.getElementById('logOut');
 logOut.addEventListener('click', function(eve){
   localStorage.removeItem("storageName");
 })
// const graphType = document.getElementById('graphTypebtn').checked


//alert("test");

// graphType.addEventListener('click', function(e){
//   var results = e.value;
//   console.log(results);
// })

const notificationBtc = {
    title: 'Bitcoin Alert',
    body: 'Bitcoin just beat your target price!',
    icon: path.join(__dirname, '../assets/images/btc.png'),
    sound: 'wipe.mp3'
}

const notificationSensex = {
    title: 'Sensex Alert',
    body: 'Sensex just reached your target ! ',
    icon: path.join(__dirname, '../assets/images/btc.png'),
    sound: 'wipe.mp3'
}

const notificationGold = {
    title: 'Gold rate Alert',
    body: 'Gold Rates just beat your target price!',
    icon: path.join(__dirname, '../assets/images/btc.png'),
    sound: 'wipe.mp3'
}


var userId = localStorage.getItem("storageName");
console.log(userId);

var userSql = "SELECT * FROM tbluser WHERE id=?";

con.query(userSql, [userId], function(error, resu){
  if (error) {throw error}

    var uname = resu[0].username;

    userPlace.innerHTML = "Welcome "+ uname;
    // document.getElementById('dashName').innerHTML = uname;
})


function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
        .then(res => {
            const cryptos = res.data.BTC.USD
            price.innerHTML = '$'+cryptos.toLocaleString('en')

            request('https://www.quandl.com/api/v3/datasets/BITSTAMP/USD.json?api_key=knVzs43rSuvCx7oV9ryE', function(error, response, body){
   var body = JSON.parse(body);
   var currentBitcoinVal = body.dataset.data[0][2];
   // document.getElementById('priceSensex').innerHTML = currentSensex;
   // console.log(body.dataset.data[0][2])

   var sensexValBefore1 = body.dataset.data[1][2];
   var sensexValBefore2 = body.dataset.data[2][2];
   var sensexValBefore3 = body.dataset.data[3][2];
   var sensexValBefore4 = body.dataset.data[4][2];
   var sensexValBefore5 = body.dataset.data[5][2];

   var sensexDateCurrent = body.dataset.data[0][0]+ " ";
   var sensexDateBefore1 = body.dataset.data[1][0]+ " ";
   var sensexDateBefore2 = body.dataset.data[2][0]+ " ";
   var sensexDateBefore3 = body.dataset.data[3][0]+ " ";
   var sensexDateBefore4 = body.dataset.data[4][0]+ " ";
   var sensexDateBefore5 = body.dataset.data[5][0]+ " ";

    const CHART3 = document.getElementById("ChartBtc")



    let sensexChart = new Chart(CHART3, {
        type: 'line',
        data: {
            labels: [sensexDateBefore5, sensexDateBefore4, sensexDateBefore3, sensexDateBefore2, sensexDateBefore1,  sensexDateCurrent],
            datasets: [{
                label: 'Last 5 days record',
                // data: [12, 19, 3, 5, 2, 3],
                data: [sensexValBefore5, sensexValBefore4, sensexValBefore3,sensexValBefore2, sensexValBefore1, cryptos],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                        yAxes: [{
                        ticks: {
                        beginAtZero:false
                    }
                }]
            }
        }
    })
//     const CHART4 = document.getElementById("ChartBtc2")
//      let sensexChart2 = new Chart(CHART4, {
//         type: 'bar',
//         data: {
//             labels: [sensexDateBefore5, sensexDateBefore4, sensexDateBefore3, sensexDateBefore2, sensexDateBefore1,  sensexDateCurrent],
//             datasets: [{
//                 label: 'Last 5 days record',
//                 // data: [12, 19, 3, 5, 2, 3],
//                 data: [sensexValBefore5, sensexValBefore4, sensexValBefore3,sensexValBefore2, sensexValBefore1, cryptos],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255,99,132,1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                         yAxes: [{
//                         ticks: {
//                         beginAtZero:false
//                     }
//                 }]
//             }
//         }
//     })





})  
            if (targetPrice.innerHTML == 'target set to $0 You will shortly receive a notification') {
                targetPrice.innerHTML = 'Choose a Valid Target Price';

            }


           else if (targetPrice.innerHTML != '' && targetPriceVal != 0 && targetPriceVal < res.data.BTC.USD) {

// notifier.notify('Message');
 
// Object
var mailQuery = "SELECT * FROM tbluser WHERE id = ?";
var dbId = [
  [userId]
]
con.query(mailQuery, dbId, function(err, result){
  if (err) {throw err}
  var mailId = result[0].email
  var name   = result[0].username
  // alert("your email is" + mailId)
  var mailOptions = {
  from: 'Stocks monitoring App',
  to: mailId,
  subject: 'Bitcoin is around your target!',
  html: '<p>Hey ' + name + ' Bitcoins reached your target value <br> <strong>Current BTC USD: </strong>'+ res.data.BTC.USD + '<br> <strong>Your Target :</strong>' + targetPriceVal + '</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})

 var lastTar = targetPriceVal;
//alert("your target =" + targetPriceVal);
notifier.notify({ 
  title: 'Bitcoin Alert',
  message: 'Bitcoin reached your Target',
  icon: path.join(__dirname, '../assets/images/btc.png'),
  sound: true, 
  wait: true
});
notifier.on('click', function(notifierObject, options) {
  targetPriceVal = undefined;
  targetPrice.innerHTML = "Last target set to"+ " " + "$"+lastTar;
   var InsertTarget = "INSERT INTO tbltarget (target, userid, stock) VALUES ? ";
   var dbvalue = [

   [lastTar, userId, "Bitcoin"]

   ]
 con.query(InsertTarget, [dbvalue], (err, result) =>{
  if (err) throw err;
  console.log("one row insreted!");
 })
});

                const myNotification = new window.Notification(notificationBtc.title, notificationBtc)
               
                console.log(targetPriceVal)
                notifyBtn.innerHTML = "set a new Target";
                
              //   var mailOptions = {
              //   from: 'jeevaltravel@gmail.com',
              //   to: 'mayanksharmasav97@gmail.com',
              //   subject: 'Bitcoin reached your target',
              //   text: 'Hey mayank, Bitcoin just reached your target..check your dashboard asap.'
              // };

              // transporter.sendMail(mailOptions, function(error, info){
              //   if (error) {
              //     console.log(error);
              //   } else {
              //     console.log('Email sent: ' + info.response);
              //   }
              // });


                  myNotification.onclick = () => {
                     targetPriceVal = undefined;
                     targetPrice.innerHTML = "Last target set to"+ " " + "$"+lastTar;
                  console.log('clicked')
                  }

                  //  for(var k=0 ; k<82000; k++){
                  // console.log(targetPriceVal)
                  // }


               
                    
                  }


          

        })
}
getBTC()
setInterval(getBTC, 10000);

notifyBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200})
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
   
})

// fetching sensex
function getSensex(){
    request('https://www.quandl.com/api/v3/datasets/BSE/SPBSN5IP.json?api_key=knVzs43rSuvCx7oV9ryE', function(error, response, arg){
   var body2 = JSON.parse(arg);
   var dateBseToday = body2.dataset.data[0][0];
   const currentSensex = body2.dataset.data[0][1];

  // var lastRef = body2.dataset.refreshed_at;
   // document.getElementById('lastRefreshAt').innerHTML = lastRef.toISOString();
    document.getElementById('priceSensex').innerHTML =  currentSensex.toLocaleString('en')+" "+'INR';

var bseInsQuery = "INSERT INTO tbldatabse (Date, Open) VALUES ?";
           var bseDeta = [
            [dateBseToday, currentSensex]
           ]
           con.query(bseInsQuery, [bseDeta], function(erro, reso){
            if (erro) {console.log(erro)}
             // console.log("inserted")
         //  alert("new value inserted in sensex db")
           })

   // console.log(body.dataset.data[0][2])
   if (targetPriceBse.innerHTML == 'target set to 0 INR You will shortly receive a notification') {
                targetPriceBse.innerHTML = 'Choose a Valid Target Price';

            }
 
    if (targetPriceBse.innerHTML != '' && targetPriceVal1 != 0 && targetPriceVal1 < body2.dataset.data[0][2]) {
   
var mailQuery = "SELECT * FROM tbluser WHERE id = ?";
var dbId = [
  [userId]
]
con.query(mailQuery, dbId, function(err, result){
  if (err) {throw err}
  var mailId = result[0].email
  var name   = result[0].username
  // alert("your email is" + mailId)
  var mailOptions = {
  from: 'Stocks monitoring App',
  to: mailId,
  subject: 'Sensex is around your target!',
  html: '<p>Hey ' + name + ' Sensex reached your target value <br> <strong>Current Sensex: </strong>'+ body2.dataset.data[0][2] + '<br> <strong>Your Target :</strong>' + targetPriceVal1 + '</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})


   var lastBseTar = targetPriceVal1;
  // var InsertTarget = "INSERT INTO tbluser (userTargets) VALUES=? WHERE email = ' + mysql.escape(userId)";
 // con.query(InsertTarget, [lastTar], (err, result) =>{
 //  if (err) throw err;
 //  consol.log("one row insreted!");
 // })
notifier.notify({
  title: 'Sensex Alert',
  message: 'Sensex reached your Target',
  icon: path.join(__dirname, '../assets/images/btc.png'), // Absolute path (doesn't work on balloons)
  sound: true, // Only Notification Center or Windows Toasters
  wait: true
});
notifier.on('click', function(notifierObject, options) {
  targetPriceVal1 = undefined;
  targetPriceBse.innerHTML = "Last target set to"+ " " + "$"+lastBseTar;

   var InsertTarget = "INSERT INTO tbltarget (target, userid, stock) VALUES ? ";
   var dbvalue = [

   [lastBseTar, userId, "Sensex"]

   ]
 con.query(InsertTarget, [dbvalue], (err, result) =>{
  if (err) throw err;
  console.log("one row insreted!");
 })
});

        const myNotification = new window.Notification(notificationSensex.title, notificationSensex)
        notifyBtn2.innerHTML = "set a new Target";
        
          myNotification.onclick = () => {
                     targetPriceVal1 = undefined;
                     targetPriceBse.innerHTML = "Last target set to"+ " " +lastTar + " " + "INR";
                  console.log('clicked')


                  }
            }
   var sensexValBefore1 = body2.dataset.data[1][1];
   var sensexValBefore2 = body2.dataset.data[2][1];
   var sensexValBefore3 = body2.dataset.data[3][1];
   var sensexValBefore4 = body2.dataset.data[4][1];
   var sensexValBefore5 = body2.dataset.data[5][1];

   var sensexDateCurrent = body2.dataset.data[0][0]+ " ";
   var sensexDateBefore1 = body2.dataset.data[1][0]+ " ";
   var sensexDateBefore2 = body2.dataset.data[2][0]+ " ";
   var sensexDateBefore3 = body2.dataset.data[3][0]+ " ";
   var sensexDateBefore4 = body2.dataset.data[4][0]+ " ";
   var sensexDateBefore5 = body2.dataset.data[5][0]+ " ";

    const CHART2 = document.getElementById("sensexChart")

    let sensexChart = new Chart(CHART2, {
        type: 'bar',
        data: {
            labels: [sensexDateBefore5, sensexDateBefore4, sensexDateBefore3, sensexDateBefore2, sensexDateBefore1,  sensexDateCurrent],
            datasets: [{
                label: 'Last 5 days record',
                // data: [12, 19, 3, 5, 2, 3],
                data: [sensexValBefore5, sensexValBefore4, sensexValBefore3,sensexValBefore2, sensexValBefore1, currentSensex],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                        yAxes: [{
                        ticks: {
                        beginAtZero:false
                    }
                }]
            }
        }
    })

})

    
         
}

getSensex();

setInterval(getSensex,10000);
setInterval(sound.play(), 10);
// fetching gold price
function getGold(){
        request('https://www.quandl.com/api/v3/datasets/CHRIS/MCX_GC1.json?api_key=knVzs43rSuvCx7oV9ryE', function(error, response, body){
       var body = JSON.parse(body);
       // console.log();
      var dateToday = body.dataset.data[0][0];
       var currentSensex = body.dataset.data[0][1];

       document.getElementById('priceGold').innerHTML = currentSensex.toLocaleString('en')+" "+'INR';
       // console.log(body.dataset.data[0][2])

       //  var checkRateQuery = "SELECT * FROM tbldatagold WHERE Date=?";
       // var DateArr = [
       //  [dateToday]
       // ]
       // con.query(checkRateQuery, DateArr, function(err, resDate){
       //  // console.log("check = " +);
       //  if (resDate.length == 0) {
          var insGoldQuery = "INSERT INTO tbldatagold (Date, Open) VALUES ?";
           var goldDeta = [
            [dateToday, currentSensex]
           ]
           con.query(insGoldQuery, [goldDeta], function(erro, reso){
            if (erro) {console.log(erro)}
              console.log("inserted")
           })
       //  }
       // })
       if (targetPriceGold.innerHTML == 'target set to 0 INR You will shortly receive a notification') {
                targetPriceGold.innerHTML = 'Choose a Valid Target Price';

            }
 

       if (targetPriceGold.innerHTML != '' && targetPriceVal2 != 0 && targetPriceVal2 < body.dataset.data[0][2]) {


var mailQuery = "SELECT * FROM tbluser WHERE id = ?";
var dbId = [
  [userId]
]
con.query(mailQuery, dbId, function(err, result){
  if (err) {throw err}
  var mailId = result[0].email
  var name   = result[0].username
  // alert("your email is" + mailId)
  var mailOptions = {
  from: 'Stocks monitoring App',
  to: mailId,
  subject: 'Gold price is around your target!',
  html: '<p>Hey ' + name + ' Gold reached your target value <br> <strong>Current Gold: </strong>'+ body.dataset.data[0][2] + '<br> <strong>Your Target :</strong>' + targetPriceVal2 + '</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})




 var lastGoldTar = targetPriceVal2;
 //   var InsertTarget = "INSERT INTO tbluser (userTargets) VALUES=? WHERE email = ' + mysql.escape(userId)";
 // con.query(InsertTarget, [lastTar], (err, result) =>{
 //  if (err) throw err;
 //  consol.log("one row insreted!");
 // })
notifier.notify({
  title: 'Gold Alert',
  message: 'Gold rate reached your Target',
  icon: path.join(__dirname, '../assets/images/btc.png'), // Absolute path (doesn't work on balloons)
  sound: true, // Only Notification Center or Windows Toasters
  wait: true
});
notifier.on('click', function(notifierObject, options) {
  targetPriceVal2 = undefined;
  targetPriceGold.innerHTML = "Last target set to"+ " " + "$"+lastGoldTar;
    var targetQur = "INSERT INTO tbltarget (target, userid, stock) VALUES ? ";
   var dbvalue = [

   [lastGoldTar, userId, "Gold"]

   ]
 con.query(targetQur, [dbvalue], (err, result) =>{
  if (err) throw err;
  console.log("one row insreted!");
 })
});

        const myNotification = new window.Notification(notificationGold.title, notificationGold)
           notifyBtn3.innerHTML = "set a new Target";
          // var lastTar  = targetPriceVal2
            myNotification.onclick = () => {
                     targetPriceVal2 = undefined;
                     targetPriceGold.innerHTML = "Last target set to"+ " " +lastTar + " " + "INR";
                  console.log('clicked')



                  }
            }

       var sensexValBefore1 = body.dataset.data[1][1];
       var sensexValBefore2 = body.dataset.data[2][1];
       var sensexValBefore3 = body.dataset.data[3][1];
       var sensexValBefore4 = body.dataset.data[4][1];
       var sensexValBefore5 = body.dataset.data[5][1];

       var sensexDateCurrent = body.dataset.data[0][0]+ " ";
       var sensexDateBefore1 = body.dataset.data[1][0]+ " ";
       var sensexDateBefore2 = body.dataset.data[2][0]+ " ";
       var sensexDateBefore3 = body.dataset.data[3][0]+ " ";
       var sensexDateBefore4 = body.dataset.data[4][0]+ " ";
       var sensexDateBefore5 = body.dataset.data[5][0]+ " ";

       // var refreshRate = body.dataset.refreshed_at;
       // var d = new Date();
       // var a = d.getHours();
       // console.log(a);
        const CHART3 = document.getElementById("goldChart")

        let sensexChart = new Chart(CHART3, {
            type: 'bar',
            data: {
                labels: [sensexDateBefore5, sensexDateBefore4, sensexDateBefore3, sensexDateBefore2, sensexDateBefore1,  sensexDateCurrent],
                datasets: [{
                    label: 'Last 5 days record',
                    // data: [12, 19, 3, 5, 2, 3],
                    data: [sensexValBefore5, sensexValBefore4, sensexValBefore3,sensexValBefore2, sensexValBefore1, currentSensex],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                            yAxes: [{
                            ticks: {
                            beginAtZero:false
                        }
                    }]
                }
            }
        })

    })
}

getGold();

setInterval(getGold,10000);



// newWinBtc.addEventListener('click', function (event) {
//     const modalPath = path.join('file://', __dirname, 'newWinBtc.html')
//     let win 
//     win = new BrowserWindow({show: false})
//     win.maximize();
//     win.on('close', function () { win = null })
//     win.loadURL(modalPath)
//     win.show()
  
  
// })


// newWinGold.addEventListener('click', function (event) {
//     const modalPath = path.join('file://', __dirname, 'newWinGold.html')
//     let win 
//     win = new BrowserWindow({show: false})
//     win.maximize();
//     win.on('close', function () { win = null })
//     win.loadURL(modalPath)
//     win.show()
  
  
// })

// newWinSensex.addEventListener('click', function (event) {
//     const modalPath = path.join('file://', __dirname, 'newWinSensex.html')
//     let win 
//     win = new BrowserWindow({show: false})
//     win.maximize();
//     win.on('close', function () { win = null })
//     win.loadURL(modalPath)
//     win.show()
  
  
// })




notifyBtn2.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'addBSE.html')
    let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

notifyBtn3.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'addGold.html')
    let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})


ipc2.on('targetPriceVal1', function (event, arg) {
    targetPriceVal1 = Number(arg);
    BsetargetPrice.innerHTML = "target set to" + " " + targetPriceVal1.toLocaleString('en')+" " + "INR"+ " " +"You will shortly receive a notification"
    console.log(targetPriceVal2);
    console.log(targetPriceVal1);
})

ipc3.on('targetPriceVal2', function (event, arg) {
    targetPriceVal2 = Number(arg);
    GoldtargetPrice.innerHTML = "target set to" + " " + targetPriceVal2.toLocaleString('en')+" " + "INR"+ " " +"You will shortly receive a notification"
    console.log(targetPriceVal2);
})


ipc.on('targetPriceVal', function (event, arg) {
    targetPriceVal = Number(arg)
    targetPrice.innerHTML = "target set to" + " " + '$'+targetPriceVal.toLocaleString('en')+ " " +"You will shortly receive a notification"
})


// ipcUser.on('userId', (event, arg) =>{
//   userId = Number(arg)
//   alert(userId);
//    targetPrice.innerHTML = userId;
// })