const request = require('request');
request.get({
  url: 'https://www.amazon.com/dp/B00X17TCMG',
  proxy: 'https://127.0.0.1:24000'
}, (err, res) => {
  if (err) {
    console.log('ERROR', err);
  } else {
    console.log('OK', res);
  }
});