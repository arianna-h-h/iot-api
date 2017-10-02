const mongoose = require('mongoose');
const config = require('../config');
const routes = require('./routes');
const restify = require('restify');
const restifyPlugins = require('restify-plugins');

const server = restify.createServer({
  name: config.name,
  version: config.version,
});

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

server.listen(config.port, () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.db.uri, { useMongoClient: true });

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error('DB Error', err);
    process.exit(1);
  });

  db.once('open', () => {
    routes(server);
    console.log(`Server is listening on port ${config.port}`);
  });
});

module.exports = server;
