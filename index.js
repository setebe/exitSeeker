const axios = require('axios')
const SocksAgent = require('axios-socks5-agent')
const https = require('https');
 
// const { httpAgent, httpsAgent } = new SocksAgent({ rejectUnauthorized:false, host: '127.0.0.1', port: 24000, agentOptions: { keepAlive: true } }) 
// axios
//   .get('https://wtfismyip.com/json', { httpAgent, httpsAgent })
//   .then(res => console.log(res.data))
//   .catch(e => console.error(e))


const agent = new https.Agent({  
    rejectUnauthorized: false,
    protocol: 'http',
    host: '127.0.0.1',
    port: '24000'
  });
  axios.get('https://wtfismyip.com/json', { httpsAgent: agent }).then(res=>{
      console.log(res.data)
  }).catch(e=>{
      console.error(e)
  });