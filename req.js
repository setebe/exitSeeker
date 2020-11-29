const request = require('request').defaults({rejectUnauthorized:false});
request.get({
  url: 'https://www.amazon.com/dp/B00X17TCMG',
  proxy: 'http://127.0.0.1:24000'
}, (err, res) => {
  if (err) {
    console.log('ERROR', err);
  } else {
    console.log('OK', res);
  }
});