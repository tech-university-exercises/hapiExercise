const Server = require('./handle.js');
const fs = require('fs');
// const output = require('./index.html');

describe('ping controller', () => {
  const options = {
    method: 'GET',
    url: '/',
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

  test('responds with success for ping', (done) => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('responds with an html file', (done) => {
    Server.inject(options, (response) => {
      const output = fs.readFileSync('index.html', 'UTF8');
      expect(response.result).toBe(output);
      done();
    });
  });
});
