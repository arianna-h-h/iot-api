'use strict';

const device = require('../../src/models/Device');


describe('When given a name and id', () => {
  it('returns object with name, id, and _id', () => {
    const result = device({ name: 'test-name', id: 'test-id' });
    expect(result.name).toBe('test-name');
    expect(result.id).toBe('test-id');
  });
});
