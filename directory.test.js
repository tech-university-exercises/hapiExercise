const Server = require('./directory.js');
const fs = require('fs');
// const output = require('./index.html');

describe('ping controller', () => {
  const options = {
    method: 'GET',
    url: '/foo/bar/baz/file.html',
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

  test('response checked', (done) => {
    Server.inject(options, (response) => {
      const output = fs.readFileSync('public/file.html', 'UTF8');
      expect(response.result).toBe(output);
      done();
    });
  });
});
