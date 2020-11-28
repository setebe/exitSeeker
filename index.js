const axios = require('axios')
const SocksAgent = require('axios-socks5-agent')
 
const { httpAgent, httpsAgent } = new SocksAgent({ host: '127.0.0.1', port: 24000, agentOptions: { keepAlive: true } }) 
axios
  .get('https://wtfismyip.com/json', { httpAgent, httpsAgent })
  .then(res => console.log(res.data))
  .catch(e => console.error(e))