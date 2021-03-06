const Server = require('./helping');
// const fs = require('fs');
// const output = require('./index.html');

describe('Testing the response', () => {
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
    const options = {
      method: 'GET',
      url: '/?name=anmol&suffix=varma',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('responds with 404 for invalid query', (done) => {
    const options = {
      method: 'GET',
      url: '/name=ix=varma',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
