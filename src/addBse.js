const electron  = require('electron')
const path  = require('path')
const remote = electron.remote
// const ipc = electron.ipcRenderer
const ipc2 = electron.ipcRenderer



const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close();
})


const updateBtn1 = document.getElementById('updateBtn1')

updateBtn1.addEventListener('click', function () {
  ipc2.send('update-notify-value1', document.getElementById('notifyVal2').value)

  var window = remote.getCurrentWindow();
  window.close();
})


document.querySelector(".preventClassBse").addEventListener('keypress', function(evt){
	 if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
})


