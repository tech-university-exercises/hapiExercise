const fs = require('fs');
const rot13 = require('rot13-transform');
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
  // port: Number(process.argv[2] || 8080),
});

function handleFunction(req, reply) {
  const result = fs.createReadStream('test.txt');
  reply(result.pipe(rot13()));
}

server.route({ path: '/', method: 'GET', handler: handleFunction });

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
