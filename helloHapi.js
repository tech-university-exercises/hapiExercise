const Hapi = require('hapi');

// function serverStart(port) {
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080),
});

function handleFunction(request, reply) {
  reply('Hello hapi');
  return ('Hello hapi');
}

server.route({ path: '/', method: 'GET', handler: handleFunction });

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = { handleFunction, server };
