const axios = require('axios')
// const SocksAgent = require('axios-socks5-agent')
const https = require('https');

const agent = new https.Agent({  
    rejectUnauthorized: false,
    protocol: 'https',
    host: 'localhost',
    port: '24000'
  });
  axios.get('https://www.amazon.com/dp/B00X17TCMG', { withCredentials: true, httpsAgent: agent, maxRedirects:20 }).then(res=>{
      console.log(res.data)
  }).catch(e=>{
      console.error(e)
  });