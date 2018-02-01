const Hapi = require('hapi');
const Inert = require('inert');
// const Path = require('path');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

server.register(Inert, (err) => {
  if (err) throw err;
});

server.route({
  method: 'GET',
  path: '/foo/bar/baz/{filename}',
  handler: (request, response) => {
    response.file(`public/${request.params.filename}`);
  },
});

server.start((err) => {
  if (err) throw err;
});

module.exports = server;
