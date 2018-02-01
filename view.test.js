const Server = require('./view.js');
// const fs = require('fs');
// const output = require('./index.html');

describe('ping controller', () => {
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

  test('responds with success for ping', (done) => {
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
