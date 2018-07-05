
const axios = require('axios')
const request = require('request')

function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
        .then(res => {
            const cryptos = res.data.BTC.USD
            price.innerHTML = '$'+cryptos.toLocaleString('en')

            request('https://www.quandl.com/api/v3/datasets/BITSTAMP/USD.json?api_key=knVzs43rSuvCx7oV9ryE', function(error, response, body){
   var body = JSON.parse(body);
   var currentBitcoinVal = body.dataset.data[0][1];
   // document.getElementById('priceSensex').innerHTML = currentSensex;
   // console.log(body.dataset.data[0][2])

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


        let sensexChart1 = new Chart(ChartBtc2, {
        type: 'bar',
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
            // if (targetPrice.innerHTML == 'target set to $0 You will shortly receive a notification') {
            //     targetPrice.innerHTML = 'Choose a Valid Target Price';

            // }


          // else if (targetPrice.innerHTML != '' && targetPriceVal != 0 && targetPriceVal < res.data.BTC.USD) {

// notifier.notify('Message');
 
// Object
// var mailQuery = "SELECT * FROM tbluser WHERE id = ?";
// var dbId = [
//   [userId]
// ]
// con.query(mailQuery, dbId, function(err, result){
//   if (err) {throw err}
//   var mailId = result[0].email
//   var name   = result[0].username
//   // alert("your email is" + mailId)
//   var mailOptions = {
//   from: 'Stocks monitoring App',
//   to: mailId,
//   subject: 'Bitcoin is around your target!',
//   html: '<p>Hey ' + name + ' Bitcoins reached your target value <br> <strong>Current BTC USD: </strong>'+ res.data.BTC.USD + '<br> <strong>Your Target :</strong>' + targetPriceVal + '</p>'
// };

// // transporter.sendMail(mailOptions, function(error, info){
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log('Email sent: ' + info.response);
// //   }
// // });
// })

 //var lastTar = targetPriceVal;
//alert("your target =" + targetPriceVal);
// notifier.notify({ 
//   title: 'Bitcoin Alert',
//   message: 'Bitcoin reached your Target',
//   icon: path.join(__dirname, '../assets/images/btc.png'),
//   sound: true, 
//   wait: true
// });
// notifier.on('click', function(notifierObject, options) {
//   targetPriceVal = undefined;
//   targetPrice.innerHTML = "Last target set to"+ " " + "$"+lastTar;
//    var InsertTarget = "INSERT INTO tbltarget (target, userid, stock) VALUES ? ";
//    var dbvalue = [

//    [lastTar, userId, "Bitcoin"]

//    ]
//  con.query(InsertTarget, [dbvalue], (err, result) =>{
//   if (err) throw err;
//   console.log("one row insreted!");
//  })
// });

                // const myNotification = new window.Notification(notificationBtc.title, notificationBtc)
               
                // console.log(targetPriceVal)
                // notifyBtn.innerHTML = "set a new Target";
                
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


                  // myNotification.onclick = () => {
                  //    targetPriceVal = undefined;
                  //    targetPrice.innerHTML = "Last target set to"+ " " + "$"+lastTar;
                  // console.log('clicked')
                  // }

                  //  for(var k=0 ; k<82000; k++){
                  // console.log(targetPriceVal)
                  // }


               
                    
                  // }


          

        })
}




getBTC()
setInterval(getBTC, 10000);