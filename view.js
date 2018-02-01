const Vision = require('vision');
const Hapi = require('hapi');
const Path = require('path');
const handle = require('handlebars');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.register(Vision, (err) => {
  if (err) throw err;
});

server.views({ engines: { html: handle }, path: Path.join(__dirname, 'templates') });
server.route({ path: '/{name?}', method: 'GET', handler: { view: 'index.html' } });

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
