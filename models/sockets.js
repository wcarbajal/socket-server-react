class Sockets {
  constructor( io ) {
    this.io = io
    this.socketEvents()
 
  }

  socketEvents() {
    //On conextion
    this.io.on( 'connection', ( socket ) => {

      //Eschuar eventros mensaje-to-server
      socket.on( 'mensaje-to-server', ( data ) => {
        console.log( data );

        this.io.emit( 'mensaje-from-server', data );
      } );

    } );

  }
}

module.exports = Sockets;