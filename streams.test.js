const Server = require('./streams');

describe('Server test', () => {
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

  test('responds with success statusCode', (done) => {
    Server.inject(options, (response) => {
      console.log(123);
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('responds with success statusCode', (done) => {
    Server.inject(options, (response) => {
      console.log(123);
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
