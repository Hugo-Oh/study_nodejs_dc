// 함수의 this는 global
function hello() {
    
    console.log(this);
    console.log(this === global);
}

hello();

// class에서 this는 클래스 자기자신                                             
class A { 
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('-------- class --------')
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction();

// 밖에서 쓰이는 this는 모듈의 익스퍼츠
console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports);
