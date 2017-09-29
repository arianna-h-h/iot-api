'use strict';

const request = require('supertest');
const deviceRoutes = require('../src/routes');
const server = require('../src/index');

const devices = deviceRoutes(server);

describe('POST /devices', () => {
  describe('When given a name', () => {
    it('returns name.', () => {
      return request(devices)
        .post('/devices').send({ name: 'Arianna', id: 'test-id' })
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe('"New device added: Arianna test-id"');
        });
    });
  });
});
