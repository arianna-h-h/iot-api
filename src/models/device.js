const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');

const DeviceSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
});

DeviceSchema.plugin(mongooseStringQuery);

function Device(data) {
  try {
    if (!data.id) return new Error('No ID provided.');
    if (!data.name) return new Error('Device name not provided.');
    return mongoose.model('Device', DeviceSchema)({ id: data.id, name: data.name });
  } catch (error) {
    return new Error('No ID or device name was provided.');
  }
}

module.exports = Device;
