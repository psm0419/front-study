//operator 
//oper01.js

let x = 10;
let y = 10;
let z = '10';

console.log(x == y);    //true
console.log(x == z);    //true
console.log(x === y);   //true
console.log(x === z);   //false
// !=  !==


console.log( 1==1 && 2==2); 
// A && B   둘다 참 -> 참
// A || B   둘다 거짓 -> 거짓


console.log( 1==1 && 10);   //10
console.log( 1!=1 && 10);   //false

console.log( 1!=1 || 20);   //20
console.log( 1==1 || 20);   //true

//조건 참 -> A 실행
let a = 10; 
//조건 a == 10 이면 -> A 실행

if(a == 10){
    console.log("A");
}

a == 10 && console.log("A");



let q = 10;
let w = '20';
let e = 30;

console.log(q+w);
console.log(q+e);
console.log(q+''+e);

console.log(q+String(e));
console.log(q+Number(w));

console.log(Number("123"));
console.log(Number("123.456"));

