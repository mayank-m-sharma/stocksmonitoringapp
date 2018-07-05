var request = require('request');
var cheerio = require('cheerio');
var indoreText = document.getElementById('indoreGoldrate');
var bhopalText = document.getElementById('bhopalGoldrate');
var mumbaiText = document.getElementById('mumbaiGoldrate');
var delhiText = document.getElementById('delhiGoldrate');
var ratlamText = document.getElementById('ratlamGoldrate');
var ahemdabadText = document.getElementById('ahemdabadGoldrate');
const testVal = "";
var indoreUrl = "https://www.goldpriceindia.com/gold-price-indore.php";
var indoreStr;
var bhopalStr;
var ratlamStr;	
var delhiStr;
var mumbaiStr;
// var indoreToday;
// var bhopalToday;
// var ratlamToday;
// var mumbaiToday;
// var delhiToday;
// var ahemdabadToday;


//db connection
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





 // var indoreVal = doWork();
// indore 
// function doWork() {
// var leg = mute();
// console.log("leg = " +leg);
request(indoreUrl, function mute (err, res, html){
	if (!err) {
		var  $ = cheerio.load(html);
		var goldRate = $(".prc").text();

		
	}
	// console.log(goldRate);
	
	// var test = parseInt(goldRate);
	var str1 = goldRate;
	// testVal = goldRate;
	 str1.replace(/\,/g,"");
	 var str2 = str1.replace(/\,/g,"");
	 var indoreRate = parseInt(str2);
	  // indRate = indoreRate;
	 // console.log("indore =" + indoreRate);
	 // indoreText.innerHTML = goldRate;
	 indoreText.innerHTML = goldRate;
	 // console.log("value=" + indoreRate);
	 // console.log("string=" + str1);


	 // db insertion
	   var sql = "UPDATE indore_goldprice SET value = ? WHERE id = ?";

	con.query(sql, [indoreRate, 1], function (error, result) {
    if (error) throw error;
    
  });

 
})
// console.log("testVAL ="+testVal);
// var heading1 = document.getElementById('tryText');
// var headVal  = heading1.textContent;
// console.log(headVal);
// var indoreValue = document.getElementById(indoreGoldrate).innerHTML ;
// console.log("indore value = " + indoreValue);
// console.log(mute());


// console.log("global indore= " + indoreVal);

// ratlam
// everyRate();
// function everyRate (){

var ratlamUrl = "https://www.goldpriceindia.com/gold-price-ratlam.php";

request(ratlamUrl, function(err, res, html){
	if (!err) {
		var $ = cheerio.load(html);
		var ratlamGoldStr = $(".prc").text();

	}
	// console.log("ratlam gold rate= "+ ratlamGold);
	 indoreStr = ratlamGoldStr;
	 indoreStr.replace(/\,/g,"");
	 var str2 = indoreStr.replace(/\,/g,"");
	 var ratlamGoldVal = parseInt(str2);
	 // console.log("ratlam ="+ ratlamGoldVal);
	 ratlamText.innerHTML = ratlamGoldStr;
   var sql = "UPDATE ratlam_goldprice SET value = ? WHERE id = ?";

	con.query(sql, [ratlamGoldVal, 1], function (error, result) {
    if (error) throw error;
    
  });

})
	

// bhopal
var bhopalUrl = "https://www.goldpriceindia.com/gold-price-bhopal.php";

request(bhopalUrl, function(err, res, html){
	if (!err) {
		var $ = cheerio.load(html);
		var bhopalGoldStr = $(".prc").text();

	}
	// console.log("ratlam gold rate= "+ ratlamGold);
	var str1 = bhopalGoldStr;
	 str1.replace(/\,/g,"");
	 var str2 = str1.replace(/\,/g,"");
	 var bhopalGoldVal = parseInt(str2);
	 // console.log(bhopalGoldStr);
	 bhopalText.innerHTML = bhopalGoldStr;

	 // giveBackVal(str2);
	 // function giveBackVal (){
	 // 	alert(str2);
	 // }
	   var sql = "UPDATE bhopal_goldprice SET value = ? WHERE id = ?";

	con.query(sql, [bhopalGoldVal, 1], function (error, result) {
    if (error) throw error;
    
  });


})	

// delhi
var delhiUrl = "https://www.goldpriceindia.com/gold-price-delhi.php";

request(delhiUrl, function(err, res, html){
	if (!err) {
		var $ = cheerio.load(html);
		var delhiGoldStr = $(".prc").text();

	}
	// console.log("ratlam gold rate= "+ ratlamGold);
	var str1 = delhiGoldStr;

	 str1.replace(/\,/g,"");
	 var str2 = str1.replace(/\,/g,"");
	 var delhiGoldVal = parseInt(str2);
	 // console.log("delhi ="+ delhiGoldVal);
	 delhiText.innerHTML = delhiGoldStr;
	 // showResult(delhiGoldVal);
	 // global.globalDelhi=str1;
	   var sql = "UPDATE delhi_goldprice SET value = ? WHERE id = ?";

	con.query(sql, [delhiGoldVal, 1], function (error, result) {
    if (error) throw error;
    
  });

});

// function showResult(delhiGoldVal){
// 	alert(globalDelhi);

// console.log("global delhi ="+ global.globalDelhi);

// mumbai

var mumbaiUrl = "https://www.goldpriceindia.com/gold-price-mumbai.php";

request(mumbaiUrl, function(err, res, html){
	if (!err) {
		var $ = cheerio.load(html);
		var mumbaiGoldStr = $(".prc").text();

	}
	// console.log("ratlam gold rate= "+ ratlamGold);
	var str1 = mumbaiGoldStr;
	 str1.replace(/\,/g,"");
	 var str2 = str1.replace(/\,/g,"");
	 var mumbaiGoldVal = parseInt(str2);

	 // console.log("mumbai ="+ mumbaiGoldVal);
	 mumbaiText.innerHTML = mumbaiGoldStr;
	 // module.exports = str1;
	   var sql = "UPDATE mumbai_goldprice SET value = ? WHERE id = ?";

	con.query(sql, [mumbaiGoldVal, 1], function (error, result) {
    if (error) throw error;
    
  });

})	


var ahemdabadUrl = "https://www.goldpriceindia.com/gold-price-ahmedabad.php";

request(ahemdabadUrl, function(err, res, html){
	if (!err) {
		var $ = cheerio.load(html);
		var ahemdabadGoldStr = $(".prc").text();

	}
	// console.log("ratlam gold rate= "+ ratlamGold);
	var str1 = ahemdabadGoldStr;
	 str1.replace(/\,/g,"");
	 var str2 = str1.replace(/\,/g,"");
	 var ahemdabadGoldVal = parseInt(str2);

	 // console.log("mumbai ="+ mumbaiGoldVal);
	 ahemdabadText.innerHTML =ahemdabadGoldStr;
	 // module.exports = str1;
	   var sql = "UPDATE ahemdabad_goldprice SET value = ? WHERE id = ?";

	con.query(sql, [ahemdabadGoldVal, 1], function (error, result) {
    if (error) throw error;
    
  });

})

// data pheka phaki
var indoreSql = "SELECT value FROM indore_goldprice WHERE id = ?";

con.query(indoreSql, [1], function (indoreErr, indoreRes) {
    if (indoreErr) throw indoreErr;
    // alert("today's gold rate in indore= " + result);
 var indoreToday =  indoreRes[0].value;
  


// bhopal
var bhopalSql = "SELECT value FROM bhopal_goldprice WHERE id = ?";

con.query(bhopalSql, [1], function (bhopalErr, bhopalRes) {
    if (bhopalErr) throw bhopalErr;
    // alert("today's gold rate in indore= " + result);
 var bhopalToday =  bhopalRes[0].value;
  

// ratlam
var ratlamSql = "SELECT value FROM ratlam_goldprice WHERE id = ?";

con.query(ratlamSql, [1], function (ratlamErr, ratlamRes) {
    if (ratlamErr) throw ratlamErr;
    // alert("today's gold rate in indore= " + result);
 var ratlamToday =  ratlamRes[0].value;
  

//delhi
var delhiSql = "SELECT value FROM delhi_goldprice WHERE id = ?";

con.query(delhiSql, [1], function (delhiErr, delhiRes) {
    if (delhiErr) throw delhiErr;
    // alert("today's gold rate in indore= " + result);
 var delhiToday =  delhiRes[0].value;
  

//  mumbai
var mumbaiSql = "SELECT value FROM mumbai_goldprice WHERE id = ?";

con.query(mumbaiSql, [1], function (mumbaiErr, mumbaiRes) {
    if (mumbaiErr) throw mumbaiErr;
    // alert("today's gold rate in indore= " + result);
 var mumbaiToday =  mumbaiRes[0].value;
  

//ahemdabad
var ahemdabadSql = "SELECT value FROM ahemdabad_goldprice WHERE id = ?";

con.query(ahemdabadSql, [1], function (ahemdabadErr, ahemdabadRes) {
    if (ahemdabadErr) throw ahemdabadErr;
    // alert("today's gold rate in indore= " + result);
 var ahemdabadToday =  ahemdabadRes[0].value;

    const CHART3 = document.getElementById('intercityChart')
let intercityChart = new Chart(CHART3, {

        type: 'bar',
        data: {
            labels: ['Indore', 'Bhopal', 'Ratlam', 'Mumbai', 'Delhi',  'Ahemdabad'],
            datasets: [{
                label: 'citywise gold rate analysis(today)',
                // data: [12, 19, 3, 5, 2, 3],
                data: [indoreToday, bhopalToday, ratlamToday,mumbaiToday, delhiToday, ahemdabadToday],
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
				  });// ahemdabad
				});// mumbai
			});//delhi
		});//ratlam
	});// bhopal
});// indore
// intercity graph plotting
// console.log(ahemdabadRes);
//     const CHART3 = document.getElementById('intercityChart')
// let intercityChart = new Chart(CHART3, {

//         type: 'line',
//         data: {
//             labels: ['Indore', 'Bhopal', 'Ratlam', 'Mumbai', 'Delhi',  'Ahemdabad'],
//             datasets: [{
//                 label: 'citywise gold rate analysis(today)',
//                 // data: [12, 19, 3, 5, 2, 3],
//                 data: [indoreToday, bhopalToday, ratlamToday,mumbaiToday, delhiToday, ahemdabadToday],
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
    
// })
// // console.log(CHART3);
// console.log("indore today"+ indoreToday);