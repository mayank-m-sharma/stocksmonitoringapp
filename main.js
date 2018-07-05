const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const shell = require('electron').shell
const ipc = require('electron').ipcMain
const ipc2 = require('electron').ipcMain
const ipc3 = require('electron').ipcMain
const ipcUser = require('electron').ipcMain

let win

function createWindow () {
  
   win = new BrowserWindow({show: false})
   win.maximize();
   win.show();

 
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/home.html'),
    protocol: 'file:',
    slashes: true
  }))

  
 //win.webContents.openDevTools()

  
  win.on('closed', () => {
  
    win = null
  })

  var menu = Menu.buildFromTemplate([
      {
          label: 'API links',
          submenu: [
                
                  {

                    label: 'quandl.com',
                    click(){
                      shell.openExternal('https://www.quandl.com')
                    },

                  },

                  {
                    label: 'cryptoCompare.com',
                    click(){
                      shell.openExternal('https://www.cryptocompare.com/')
                    }

                  },
                    {

                      label: 'CoinMarketCap',
                      click() {
                          shell.openExternal('http://coinmarketcap.com')
                    }
                },
                {type: 'separator'},
                    {
                      label: 'Exit',
                          
                          click() {
                          
                          app.quit()
                        

                    },
                    accelerator: 'Alt+F4'
                    
                }
          ]
      },
      {
          label: 'Info',

          submenu: [
            {
              label: 'Bitcoin dataset',
              click(){
                shell.openExternal('https://www.quandl.com/api/v3/datasets/BITSTAMP/USD.json?api_key=knVzs43rSuvCx7oV9ryE')
              }
            },

            {
              label: 'Sensex dataset',
              click(){
                shell.openExternal('https://www.quandl.com/api/v3/datasets/BSE/SPBSN5IP.json?api_key=knVzs43rSuvCx7oV9ryE')
              }
            },
            {
              label: 'Gold rate dataset',
              click(){
                shell.openExternal('https://www.quandl.com/api/v3/datasets/CHRIS/MCX_GC1.json?api_key=knVzs43rSuvCx7oV9ryE')
              }
            }
          ]
      },
       {
          label: 'Credits',
          submenu: [


            {
              label: 'Mayank Sharma',
              click(){
                shell.openExternal('https://github.com/mayank-m-sharma')
              }
            }
            // },

            //   {
            //     label: 'Naina Maheshwari',
            //     click(){
            //       shell.openExternal('#')
            //     }
            //   },

            //   {
            //     label: 'Mayuri Khire',
            //     click(){
            //       shell.openExternal('#')
            //     }
            //   }


          ]
      }

  ])

  Menu.setApplicationMenu(menu);
}


app.on('ready', createWindow)


app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
 
  if (win === null) {
    createWindow()
  }
})

ipc.on('update-notify-value', function(event, arg) {
  win.webContents.send('targetPriceVal', arg)
})

ipc2.on('update-notify-value1', function (event, arg) {
  win.webContents.send('targetPriceVal1', arg)
})

ipc3.on('update-notify-value2', function (event, arg) {
  win.webContents.send('targetPriceVal2', arg)
})
// ipcUser.on('userDetail', (event, arg)=>{
//   win.webContents.send('userId', arg)
// })