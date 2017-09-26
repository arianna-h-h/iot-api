const axios = require('axios');

async function Runner() {
  const deviceName = process.argv[2];
  const response = await axios({
    method: 'post',
    url: 'http://localhost:8080/devices',
    data: { name: [deviceName] },
  });
  console.log('API response:', response.data);
}

Runner();
