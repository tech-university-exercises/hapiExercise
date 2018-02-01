const Server = require('./view');
const fs = require('fs');
// const output = require('./index.html');

describe('Server test', () => {
  const options = {
    method: 'GET',
    url: '/?name=anmol',
  };

  beforeAll((done) => {
    Server.on('start', () => {
      done();
    });
  });

  afterAll((done) => {
    Server.on('stop', () => {
      done();
    });
    Server.stop();
  });

  test('responds with success statusCode', (done) => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('response checked', (done) => {
    Server.inject(options, (response) => {
      const output = fs.readFileSync('templates/index.html', 'UTF8').split('{{query.name}}').join('anmol');
      expect(response.result).toBe(output);
      done();
    });
  });
});
