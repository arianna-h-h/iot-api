'use strict';

const Device = require('../src/models/device');

describe('Device Function', () => {
  describe('When given a name and ID', () => {
    it('returns a copy/new instance of the schema', () => {
      const result = new Device({ id: 'ased-2122-32kd-8ruf', name: 'xyzName' });
      expect(result.id).toBe('ased-2122-32kd-8ruf');
      expect(result.name).toBe('xyzName');
    });
  });
  describe('When given a name and no ID', () => {
    it('returns an error', () => {
      const result = new Device({ name: 'xyzName' });
      expect(result.message).toBe('No ID provided.');
    });
  });
  describe('When given an ID and no name', () => {
    it('returns an error', () => {
      const result = new Device({ id: 'ased-2122-32kd-8ruf' });
      expect(result.message).toBe('Device name not provided.');
    });
  });
  describe('When given no ID and no name', () => {
    it('returns an error', () => {
      const result = new Device();
      expect(result.message).toBe('No ID or device name was provided.');
    });
  });
});
