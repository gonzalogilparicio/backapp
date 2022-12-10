// agregar si está seguro de cerrar la app 
// tanto apretando la X como poniendo salir 


// lado servidor:
// mandar sin comprimir
// copy hacia la 10
// escribir archivo apagar
// si algo salio mal avisar por mail
// apagar pc

// inputs:
// num sucursal
// directorio (poner por default)
// directorio a backupear
// chequear fin de mes

// lado terminal:
// iniciar con windows en el tray
// siempre abierto
// chequear cada 10 seg archivo apagar
// borrar apagar
// apagar pc
// si algo salió mal avisar por mail
// chequear fin de mes
// inputs:
// directorio archivo apagar




const {
    app,
    BrowserWindow,
    Menu
} = require('electron');
const url = require('url');
const path = require('path');
const {
    DESTRUCTION
} = require('dns');
const {
    Serializer
} = require('v8')

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {

    })
}

let mainWindow;
let newConfigurationWindow;
let newAcercaDeWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 480,
        height: 330,
        title: "BackApp",
        resizable: false
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('closed', () => {
        app.quit();
    });
});

function configurationWindow() {
    newConfigurationWindow = new BrowserWindow({
        width: 400,
        height: 330,
        title: "Configuracion",
        resizable: false
    });
    newConfigurationWindow.setMenu(null);
    newConfigurationWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/configuration.html'),
        protocol: 'file',
        slashes: true
    }))
}

function acercaDeWindow() {
    newAcercaDeWindow = new BrowserWindow({
        width: 280,
        height: 120,
        title: "Acerca de...",
        resizable: false
    });
    newAcercaDeWindow.setMenu(null);
    newAcercaDeWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/acercade.html'),
        protocol: 'file',
        slashes: true
    }))
}

const templateMenu = [{
        label: 'Archivo',
        submenu: [{
                label: 'Configuración',
                click() {
                    configurationWindow();
                }
            },
            {
                label: 'Salir',
                click() {
                    app.quit();
                }
            },
        ],
    },
    {
        label: 'Acerca de',
        click() {
            acercaDeWindow();
        }
    }
];

if (process.env.NODE_ENV !== 'production') {
    templateMenu.push({
        label: 'devtools',
        submenu: [{
                label: 'mostrar/ocultar',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload',
            },
        ]
    })
}