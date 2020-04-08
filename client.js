const net = require('net');
const { IP, PORT } = require('./constants');


/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: Jyo');
    //conn.write('Move: up');
  //  setInterval(() => {
  //     conn.write('Move: up')}, 50); 
   });  
  conn.on('data', (data) => {
     console.log('Message from server: ', data);
  }); 
  return conn;
}
//console.log('Connecting ...');
//connect();

module.exports = connect;