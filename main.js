const { app, BrowserWindow } = require('electron')
const { Menu } = require('electron')
const { dialog } = require('electron')

const template = [
  {
    label: 'File',
    submenu: [
      { label: 'Open File',
        click() {dialog.showOpenDialog({properties: ['openFile']}, FileParsing()) }
      },
      { label: 'Close Files' },
      { type: 'separator' },
      { label: 'Export to JPEG' },
      { label: 'Export to Excel' },
      { type: 'separator' },
      { role: 'Close' }      
    ]
  },
  /* TODO: update menu items in future
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  */
  {
    role: 'help',
    submenu: [
      {label: 'About'}
    ]
  }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow () {   
  // 创建浏览器窗口
  let win = new BrowserWindow({ width: 800, height: 600 })

  // 然后加载 app 的 index.html.
  win.loadFile('index.html')
}

app.on('ready', createWindow)