'use strict';

const request = require('supertest');
const deviceRoutes = require('../src/routes');
const { server, db } = require('./createTestServer');


const devices = deviceRoutes(server);


function dropTestCollection(database) {
  database.db.dropCollection('devices', (err, result) => {
    console.log('db dropped');
  });
}


afterEach(() => dropTestCollection(db),
);

describe('POST /devices', () => {
  describe('When given a name', () => {
    it('returns successful API response', () => (
      request(devices)
        .post('/devices').send({ name: 'Arianna', id: 'test-id' })
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe('{"code":200,"message":"New device added: Arianna test-id"}');
        })
    ));
  });

  describe('When given no id', () => {
    it('returns an error.', () => (
      request(devices)
        .post('/devices').send({ name: 'Arianna' })
        .then((response) => {
          expect(response.statusCode).toBe(409);
          expect(response.text).toBe('{"code":"InvalidArgument","message":"Expects id"}');
        })
    ));
  });

  describe('When given no name', () => {
    it('returns an error', () => (
      request(devices)
        .post('/devices').send({ id: 'test-id' })
        .then((response) => {
          expect(response.statusCode).toBe(409);
          expect(response.text).toBe('{"code":"InvalidArgument","message":"Expects name"}');
        })
    ));
  });
});
