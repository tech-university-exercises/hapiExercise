const Server = require('./helping');
// const fs = require('fs');
// const output = require('./index.html');

describe('Testing the response', () => {
  const options = {
    method: 'GET',
    url: '/?name=anmol&suffix=varma',
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
});
