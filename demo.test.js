const server = require('./helloHapi');

// A simple example test
// describe('#getUser() using Promises', () => {
//   it('should load user data', () => server(6000)
//     .then((data) => {
//       const output = 'Hello everyone';
//       expect(data).toBe(output);
//     }));
// });

describe('Response using async/await', () => {
  it('should load user data', async () => {
    const data = await server(8080);
    const output = 'Hello everyone';
    expect(data).toBeDefined();
    expect(data).toEqual(output);
  });
});
