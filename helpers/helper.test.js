const helper = require('./helper');

describe('Testing the response', () => {
  test('responds with success statusCode', (done) => {
    const input = { data: { root: { name: 'anmol', suffix: 'varma' } } };
    // input.data.root.name = 'anmol';
    // input.data.root.suffix = 'varma';
    expect(helper(input)).toBe('anmolvarma');
    done();
  });
});
