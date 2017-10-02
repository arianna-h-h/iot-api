const axios = require('axios');
const uuid = require('uuidv4');


const deviceName = process.argv[2];
const id = uuid();
axios({
  method: 'post',
  url: 'http://localhost:8080/devices',
  data: { name: deviceName, id },
}).then((response) => {
  console.log('API response:', response.data.message);
  console.log(response);
});
