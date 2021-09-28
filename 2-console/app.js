console.log('logging....')
//console.clear
console.clear()

// log level
console.log('log') //개발
console.info('info') // 정보
console.warn('warn') // 경보
console.error('error') // 에러, 사용자 에러, 시스템 에러

// assert 선택적 선택 가능
console.assert(2 === 3, 'not same!')
console.assert(2 === 2, 'same!')

// print object
const student = {name : 'ellie', age : "20", company : {name : 'AC'}};

console.log(student);
console.table(student);
console.dir(student, { showHidden : true, colors : false, depth : 2});

const student2 = {name : 'ellie', age : "20", company : {name : 'AC'}};
console.dir(student2, { showHidden : true, colors : false, depth : 0});

// measuring time
console.time('for loop');
for (let i =0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function')
}

a();
a();
console.countReset('a function')
a();

// trace
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('f3');
    console.trace()
    
}

f1();
