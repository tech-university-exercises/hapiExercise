const Vision = require('vision');
const Hapi = require('hapi');
const Joi = require('joi');
// const Path = require('path');
const handle = require('handlebars');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.register(Vision, (err) => {
  if (err) throw err;
});

function myHandler(req, res) {
  res(req.params.breed);
}

server.views({ engines: { html: handle }, path: './templates' });

server.route({
  path: '/chicken/{breed}',
  method: 'GET',
  handler: myHandler,
  config: {
    validate: {
      params: {
        with: Joi.string().required(),
        parameters: Joi.string().required(),
      },
    },
  },
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
