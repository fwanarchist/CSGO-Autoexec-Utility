const electron = require("electron");
const fs = require("fs");
const autoexec = require("./autoexec.js");

function createWindow () {

    // Create the browser window.
    autoexec_manager.main_window = new electron.BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        minHeight: 200,
        minWidth: 350
    });

    // and load the index.html of the app.
    autoexec_manager.main_window.loadFile('main.html');

    autoexec_manager.main_window.webContents.openDevTools();

}

var autoexec_manager = {

};

electron.app.on("ready", createWindow);
