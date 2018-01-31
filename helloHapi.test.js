const serverFunction = require('./helloHapi');

describe('Testing the handler function', () => {
  const output = 'Hello hapi';
  test('Should return Hello hapi', () => {
    expect(serverFunction.handleFunction()).toEqual(output);
  });
});
// const axios = require('axios');
//
// describe('Test the response', () => {
//   {
//     const output = '';
//     test('Hello everyone', () => {
//       console.log('1');
//       axios.get('http://localhost:8080')
//         .then((response) => {
//           console.log('234');
//           expect(response).toBe(output);
//         })
//         .catch((error) => {
//           expect(error).toBeInstanceOf(Error);
//         });
//       console.log('2');
//     });
//   }
// });
// axios.get('/')
//   .then((response) => {
//     describe('Test the response', () => {
//       {
//         const output = 'Hello everyone';
//         test('Hello everyone', () => {
//           expect(response).toBe(output);
//         });
//       }
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
