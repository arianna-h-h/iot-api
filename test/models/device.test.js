'use strict';

const device = require('../../models/Device');


describe('When given a name and id', () => {
  it('returns object with name, id, and _id', () => {
    const result = device({ name: 'test-name', id: 'test-id' });
    expect(result.name).toBe('test-name');
    expect(result.id).toBe('test-id');
    expect(result._id).toEqual(expect.stringMatching(/[0-9a-f]{24}/g));
  });
});

describe('When given a name and no id', () => {
  it('returns \'No ID provided.\'', () => {
    const result = device({ name: 'test-name' });
    expect(result).toBe('No ID provided.');
  });
});

describe('When given an id and no name', () => {
  it('returns returns \'Device name not provided.\'', () => {
    const result = device({ id: 'test-id' });
    expect(result).toBe('Device name not provided.');
  });
});
