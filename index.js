const axios = require('axios')
// const SocksAgent = require('axios-socks5-agent')
const https = require('https');

const agent = new https.Agent({  
    rejectUnauthorized: false,
    protocol: 'http',
    host: '127.0.0.1',
    port: '24000'
  });
  axios.get('https://www.amazon.com/dp/B00X17TCMG', {httpsAgent: agent, maxRedirects:5, withCredentials: true }).then(res=>{
      console.log(res.data)
  }).catch(e=>{
      console.error(e)
  });