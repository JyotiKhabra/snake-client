const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: Jyo');
    //conn.write('Move: up');
   setInterval(() => {
      conn.write('Move: up')}, 50); 
  });  
  conn.on('data', (data) => {
     console.log('Message from server: ', data);
  }); 
  return conn;
}
//console.log('Connecting ...');
//connect();

module.exports = connect;