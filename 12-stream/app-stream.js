const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
  // highWaterMark: 8, //stream이 한번에 처리하는 양을 결정, 기본은 64 kbytes
  encoding : 'utf-8',
});

const data = [];
readStream.on('data', (chunk) => {
  //console.log(chunk);
  data.push(chunk);
  console.count('data')
});

readStream.on('end', () => {
  console.log(data.join(''));
});

readStream.on('error', (error) => {
  console.log(error);
});
