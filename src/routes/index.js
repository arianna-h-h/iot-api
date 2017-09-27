

// TODO generate device ID for new device
// add device ID and name to MongoDB
function addNewDevice(name) {
  return `New device added: ${name}`;
}


server.post('/devices', (req, res, next) => {
  const responseBody = addNewDevice(req.body.name);
  res.send(responseBody);
  console.log('Successful response: ', responseBody);
  next();
});
