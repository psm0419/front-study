//func03.js



function fff(){
    console.log(1);
    console.log(2);
    //return; 리턴에서 멈춤 밑에 실행 안됨
    //console.log(3);
    return 3;
}

let result = fff();

console.log(result);

const af = ()=>{
    console.log(4);
    console.log(5);
    return 6;
}
console.log(af());

const af2 = ()=> 7;  //중괄호 없으면 바로 리턴
//const af2 = ()=> 1+2+3+4;  수식 들어가도 됨

console.log(af2());


function scope1(){
    let x = 10; //지역변수, 밖에서 x 인식 못함
}
// 밖에 있으면 전역 scope, 함수 안에 있으면 지역 scope

{ //블록 scope
    let qqq= 100;
}

ccc = 300; //var는 선언하지 않은 변수도 사용 가능
var ccc; //호이스팅 : 뒤에선언해도 맨위에 있다고 봄 그래서 위에 선언안됐을때도 사용 가능
console.log(ccc);

check(); //함수 선언도 호이스팅이므로 뒤에 있어도 맨위에 있는것으로 인식
function check(){
    console.log('check');
}

//즉시 실행 함수
//정의하면서 동시에 실행, 한번 실행되면 사라짐
(function oneuse(){
    console.log('1회용 함수');
})(); // <--여기 ()이 실행하는것

//oneuse();  <--실행 안됨