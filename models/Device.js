const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');

/**
This file creates a model and fills it with a new instance.
*/
const DeviceSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
});

DeviceSchema.plugin(mongooseStringQuery);

/**
 * Creates a new device from the data sent in the request
 * @param {Object} data - Data sent in request
 * @returns {Object} - Object with all the information for a new Device
 */

function createDevice(data) {
  try {
    if (!data.id) throw new Error('No ID provided.');
    if (!data.name) throw new Error('Device name not provided.');
    const Model = mongoose.model('Device', DeviceSchema);
    return new Model({ id: data.id, name: data.name });
  } catch (err) {
    return { error: { message: err.message } };
  }
}

module.exports = createDevice;
