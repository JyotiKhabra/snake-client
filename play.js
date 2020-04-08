const connect = require('./client')
console.log('Connecting ...');
connect();

const handleUserInput = function(data){
  if (data === '\x03'){
    process.exit()
  }
} 
  
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
