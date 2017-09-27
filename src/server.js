const restify = require('restify');
const restifyPlugins = require('restify-plugins');

// TODO generate device ID for new device
// add device ID and name to MongoDB
function addNewDevice(name) {
  return `New device added: ${name}`;
}


const server = restify.createServer();
server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));

server.post('/devices', (req, res, next) => {
  const responseBody = addNewDevice(req.body.name);
  res.send(responseBody);
  console.log('Successful response: ', responseBody);
  next();
});

server.listen(8080, () => {
  console.log(
    '%s listening at %s',
    server.name, server.url,
  );
});

module.exports = server;
