const serverFunction = require('./route');
const axios = require('axios');

describe('Testing the handler function', () => {
  const output = 'Hello anmol';
  // axios.get('http://localhost:8080/?');
  test('Should return Hello appended to the name', () => {
    expect(serverFunction.handleFunction('anmol')).toEqual(output);
  });
});
