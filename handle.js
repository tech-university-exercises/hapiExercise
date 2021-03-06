const Inert = require('inert');
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.register(Inert, (err) => {
  if (err) throw err;
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, response) => {
    response.file('index.html');
    // const val = response;
    // console.log(val);
  },
});

server.start(() => {
  console.log('Het');
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
