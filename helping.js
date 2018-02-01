const Vision = require('vision');
const Hapi = require('hapi');
const handle = require('handlebars');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.register(Vision, (err) => {
  if (err) throw err;
});

server.views({ engines: { html: handle }, path: 'templates', helpersPath: 'helpers' });
server.route({ path: '/', method: 'GET', handler: { view: 'template.html' } });
server.start((err) => {
  if (err) { console.log(err.message); throw err; }
  // console.log('Het');
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
