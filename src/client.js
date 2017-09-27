const axios = require('axios');


const deviceName = process.argv[2];
axios({
  method: 'post',
  url: 'http://localhost:8080/devices',
  data: { name: deviceName },
}).then((response) => {
  console.log('API response:', response.data);
});
