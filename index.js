const axios = require('axios')
// const SocksAgent = require('axios-socks5-agent')
const https = require('https');

const agent = new https.Agent({  
    rejectUnauthorized: false,
    protocol: 'https',
    host: '127.0.0.1',
    port: '24000'
  });
  axios.get('https://amazon.com/dp/B00X17TCMG', { headers: { 'User-Agent': 'Console app' }, httpsAgent: agent, maxRedirects: 0 }).then(res=>{
      console.log(res.data)
  }).catch(e=>{
      console.error(e)
  });