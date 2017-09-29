const errors = require('restify-errors');
const Device = require('./models/Device');

module.exports = ((server) => {
  function addNewDevice(name, id) {
    return `New device added: ${name} ${id}`;
  }

  server.post('/devices', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError('Expects \'application.json\'',
        ),
      );
    }

    const data = req.body || {};
    if (!req.body.id) {
      return next(new errors.InvalidArgumentError('Expects id'));
    }
    if (!req.body.name) {
      return next(new errors.InvalidArgumentError('Expects name'));
    }
    const device = Device(data);
    if (device.err) {
      console.log('Error:', device.err);
      return next();
    }
    return device.save((err) => {
      if (err) {
        console.error(err);
        return next(new errors.InternalError(err.message));
      }
      const responseBody = addNewDevice(req.body.name, req.body.id);
      res.send(responseBody);
      console.log('Successful response: ', responseBody);
      return next();
    });
  });

  return server;
});
