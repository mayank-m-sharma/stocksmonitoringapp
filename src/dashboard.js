const CHART = document.getElementById('myChart')
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

request('https://www.quandl.com/api/v3/datasets/BSE/SPBSN5IP.json?api_key=knVzs43rSuvCx7oV9ryE', function(error, response, arg){
var body2 = JSON.parse(arg);
   const currentSensex = body2.dataset.data[0][1];

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
        type: 'line',
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


 var logOut = document.getElementById('logOut');
 logOut.addEventListener('click', function(eve){
   localStorage.removeItem("storageName");
 })