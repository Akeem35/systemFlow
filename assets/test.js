const { remote, ipcRenderer } = require('electron')

document.getElementById('minimize-button').addEventListener('click', () => {
  remote.getCurrentWindow().minimize()
})

document.getElementById('close-button').addEventListener('click', () => {
  remote.app.quit()
})

document.getElementById('maximize-button').addEventListener('click', () => {
  const currentWindow = remote.getCurrentWindow()
  if (currentWindow.isMaximized()){
    currentWindow.unmaximize()
  } else {
    currentWindow.maximize()
  }
})