const counter = require('./counter.js')

counter.increase();
console.log(counter.getCount());

counter.count = 10; // 안먹힙니다.
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());


//console.log(count);
//console.log(getcount());

