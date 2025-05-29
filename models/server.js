//Servidor de express
const express = require( 'express' );
//Servidor de socket
const http = require( 'http' );
const socketio = require( 'socket.io' );
const path = require('path');
const Sockets = require( './sockets' );


class Server {
  constructor() {
    this.app = express();;
    this.port = process.env.PORT;


    // HTTP Server
    this.server = http.createServer( this.app );


    //Configuracion del socket server
    this.io = socketio( this.server, {/* Configuraciones */ } );

  }
  middlewares() {
    // Desplegar el directorio publico
    this.app.use( express.static( path.resolve( __dirname, '../public') ))
  }

  configurarSockets() {
    new Sockets( this.io );
  }

  execute() {

    // Inicializar middleware
    this.middlewares()

    // Inicializar sockets
    this.configurarSockets()


    // Inicializar server
    this.server.listen( this.port, () => {
      console.log( "Server corriendo en puerto :", this.port );
    } );
  }

}

module.exports = Server;