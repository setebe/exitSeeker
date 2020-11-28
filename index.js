const axios = require('axios')
// const SocksAgent = require('axios-socks5-agent')
const https = require('https');

const agent = new https.Agent({  
    rejectUnauthorized: false,
    protocol: 'http',
    host: '127.0.0.1',
    port: '9090'
  });
  axios.get('https://wtfismyip.com/json', { headers: { 'User-Agent': 'Console app' }, httpsAgent: agent }).then(res=>{
      console.log(res.data)
  }).catch(e=>{
      console.error(e)
  });