const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

function handleFunction(name, request, reply) {
  // reply(`Hello ${request.params.name}`);
  return (`Hello ${name}`);
}

server.route({ path: '/{name}', method: 'GET', handler: handleFunction });

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = { handleFunction, server };
