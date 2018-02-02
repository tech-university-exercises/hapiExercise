const Server = require('./streams');
const fs = require('fs');
const rot13 = require('rot13-transform');

describe('Server test', () => {
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
      url: '/',
    };
    Server.inject(options, (response) => {
      // console.log(123);
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('responds with error statusCode', (done) => {
    const options = {
      method: 'GET',
      url: '/anm',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  test('responds with encoded', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    Server.inject(options, (response) => {
      const output = 'Gur Chefhvg bs Uncv-arff\n';
      expect(response.result).toBe(output);
      done();
    });
  });
});
