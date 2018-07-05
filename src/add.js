const electron = require('electron')
const path = require('path')
const remote = electron.remote
const ipc = electron.ipcRenderer
const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function(event) {
  var window = remote.getCurrentWindow();

    window.close()
})


const updateBtn = document.getElementById('updateBtn')

updateBtn.addEventListener('click', function() {

	console.log(document.getElementById('notifyVal').value)
    ipc.send('update-notify-value', document.getElementById('notifyVal').value)

    var window = remote.getCurrentWindow();
    window.close()
})

document.querySelector(".preventClass").addEventListener('keypress', function(evt){
	 if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
})