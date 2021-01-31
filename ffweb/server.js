'use strict'

/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| This file bootstrap Adonisjs to start the HTTP server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTP server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass relative path from the project root.
*/

const { Ignitor } = require('@adonisjs/ignitor')
const browserSync = require('browser-sync')
new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .fireHttpServer()
  .catch(console.error)
  .then(listening)

  function listening() {
    console.log(`Demo server available on http://localhost:3333`);
    if (process.env.NODE_ENV == 'development') {
      browserSync({
        files: ['./**/*.{html,js,css,edge}'],
        online: false,
        open: false,
        port: 3333 + 1,
        proxy: 'localhost:' + '3333',
        ui: false
      });
    }
  }