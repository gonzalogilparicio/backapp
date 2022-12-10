const {
    app,
    BrowserWindow,
    Menu
} = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        
    })
}

let mainWindow;
let newConfigurationWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
});

function configurationWindow() {
    newConfigurationWindow = new BrowserWindow({
        width: 400,
        height: 330,
        title: "Configuración"
    });
    newConfigurationWindow.setMenu(null);
    newConfigurationWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/configuration.html'),
        protocol: 'file',
        slashes: true
    }))
}

const templateMenu = [
    {
        label: 'Archivo',
        submenu: [
            {
                label: 'Configuración',
                click() {
                    configurationWindow();
                }
            },
            {
                label: 'Salir',
            },
        ],
    },
     {   label: 'Acerca de',
    }
];