const handleUserInput = function(data){
  if (data === '\x03'){
    process.exit()
  }
  if (data === 'w'){
    connection.write('Move: up');
  }
  if (data === 'a'){
    connection.write('Move: left');
  }
  if (data === 's'){
    connection.write('Move: down');
  }
  if (data === 'd'){
    connection.write('Move: right');
  }
  if (data === 'j'){
    connection.write('Say: hi homies');
  }
  if (data === 'l'){
    connection.write('Say: g2g');
  }
  if (data === 'i'){
    connection.write('Say: scarm!');
  }
  if (data === 'k'){
    connection.write('Say: game on!');
  }
}  
let connection 
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}
module.exports = setupInput;