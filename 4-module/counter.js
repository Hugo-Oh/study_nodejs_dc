let count = 0

function increase() {
    count++;
}

function getCount() {
    return count;
}

module.exports.getCount = getCount;
//module.exports.increase = increase;
// module 생략 가능, exports.getCount = getCount;

console.log(module.exports === exports)

exports = {} ; //위험

console.log(module.exports === exports)
exports.increase = increase;

console.log(module);