const electron  = require('electron')
const path  = require('path')
const remote = electron.remote
const ipc3 = electron.ipcRenderer


const closeBtn = document.getElementById('closeBtn')
closeBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close();
})


const updateBtn2 = document.getElementById('updateBtn2')

updateBtn2.addEventListener('click', function () {
  ipc3.send('update-notify-value2', document.getElementById('notifyVal3').value)

  var window = remote.getCurrentWindow();
  window.close();
})

document.querySelector(".preventClassGold").addEventListener('keypress', function(evt){
	 if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
})
