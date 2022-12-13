//instalador https://github.com/electron/windows-installer

// agregar si está seguro de cerrar la app 
// tanto apretando la X como poniendo salir 

//que la app se actualice sola

//password al iniciar

//electron storage

//que arranque en el tray

//que escriba log en algun excel de drive y avise por mail si algo 
//salió mal

// lado servidor:
// mandar sin comprimir
// copy hacia la 10
// escribir archivo apagar
// si algo salio mal avisar por mail
// apagar pc

// inputs:
// num sucursal
// directorio destino (poner por default uno)
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


//importaciones de modulos de node

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
const Store = require('electron-store');
const store = new Store();

//inicializacion de ventanas

let mainWindow;
let newConfigurationWindow;
let newAcercaDeWindow;

//ventana principal

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 480,
        height: 330,
        title: "BackApp",
        resizable: false,
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        }
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

//ventana configuracion

function configurationWindow() {
    newConfigurationWindow = new BrowserWindow({
        width: 400,
        height: 330,
        title: "Configuracion",
        // resizable: false
    });
    newConfigurationWindow.setMenu(null);
    newConfigurationWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/configuration.html'),
        protocol: 'file',
        slashes: true
    }))
}

//ventana acerca de

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

//menu para la ventana principal

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

//si está en desarrollo muestra opciones para desarrolladores
//y carga el modulo reload

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {});
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