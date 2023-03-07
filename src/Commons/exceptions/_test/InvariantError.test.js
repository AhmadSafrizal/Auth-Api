/* eslint-disable no-undef */
const InvariantError = require('../InvariantError');

describe('InvariantError', () => {
  it('should create an errir correctly', () => {
    const invariantError = new InvariantError('an error occurs');

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual('an error occurs');
    expect(invariantError.name).toEqual('InvariantError');
  });
});
