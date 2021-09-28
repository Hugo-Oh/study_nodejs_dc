// Fixed-size chunk of memory
// Fixed-size chunk of memory
// array of integers, byte of data
const fs = require('fs');
const buf = Buffer.from("안녕");
// unicode based
console.log(buf);
console.log(buf.length);

// ascii code based
console.log(buf[0])
console.log(buf[1])

console.log(buf.toString('utf-8'));
// create
const buf2 = Buffer.alloc(2); //초기화
const buf3 = Buffer.allocUnsafe(2); // fast, 
buf2[0] = 72;
buf2[1] = 105;

console.log(buf2.toString());
//console.log(buf2);
//console.log(buf3.toString());
//buf2.copy(buf3)
//console.log(buf3.toString());
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf);