//func01.js

function func01(){ //함수 선언
    console.log('func01');
}

func01();

function func01_2(){
    return "func01_2";
}
console.log(func01_2());

//함수를 변수에 담아둘 수 있다
const func02 = function func002() {
    console.log('func02');
}
func02(); //왼쪽거를 불러야 실행됨

const func02_2 = function () {  //어차피 안불러질거라 이름 안지어도 된다
    console.log('func02_2');
}
func02_2();

//화살표 함수  () => {};
const func03 = () => {
    console.log('func03');
}
func03();

//매개변수 / 인수

function func05(a, b) { //매개변수에 인수를 넣어서 보여줌
    console.log(a + " " + b);
}
func05(10, 20); //인수
func05("a", "b"); //인수

const func06 = function func006(a, b){
    console.log(a + " " + b);
}
func06(30, 40);

const func07 = function(a, b){
    console.log(a + " " + b);
}
func07(80, 40);

const func08 = (a, b) => {
    console.log(a + " " + b);
}
func08(100, 150);

function func10(a,b){
    console.log(a + " " + b);
}
func10(10,20);

function func11(a,b){
    console.log(a);
    b();
}

function temp(){
    console.log('temp func');
}

function temp2(t){
    console.log('temp2 func');
    //code
    //10s
    t();
}
func11(100, temp);  //매개변수로 함수도 넘길 수 있다.

//callback 함수  다하고 마지막에 정의된 함수 실행시켜줘

//temp2 함수를 실행하고나서 temp 함수를 실행
temp2(temp);
//temp();
temp2( ()=>{
    console.log('그냥 바로 만들어서 넣은 함수');
});