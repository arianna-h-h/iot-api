'use strict';

const mongoose = require('mongoose');
const routes = require('../src/routes');
const restify = require('restify');
const restifyPlugins = require('restify-plugins');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/apiTest', { useMongoClient: true });

const db = mongoose.connection;

const server = restify.createServer({
  name: 'apiTest',
});

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

server.listen(8090, () => {

  db.on('error', (err) => {
    console.error('DB Error', err);
    process.exit(1);
  });

  db.once('open', () => {
    routes(server);
    console.log(`Test server is listening on port ${8090}`);
  });
});

module.exports = { server, db };
