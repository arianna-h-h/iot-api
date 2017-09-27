'use strict';

const request = require('supertest');
const server = require('../src/server');


describe('POST /devices', () => {
  describe('When given a name', () => {
    it('returns name.', () => (
      request(server)
        .post('/devices').send({ name: 'Arianna' })
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe('"New device added: Arianna"');
        })
    ));
  });
});
