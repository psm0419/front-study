//obj03.js

let arr = [1,2,3];

//javascript의 배열을 조작하는 함수

//추가
console.log(arr);
arr.push(10);       //배열 뒤에 값 추가
arr.unshift(20);    //배열 앞에 값 추가
console.log(arr);

console.log(''); //공백
//삭제
console.log(arr);
arr.pop(10);        //배열 뒤에 값 삭제
arr.shift(20);      //배열 앞에 값 삭제
console.log(arr); //123

console.log(arr.pop()); //뽑아서 확인한 다음 삭제

let shiftItem = arr.shift();  //뽑아서 저장, 뽑힌곳은 삭제
console.log(shiftItem);

console.log(arr);
console.log('');

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2)) //concat 배열 연결시키기
// ... -> 배열분해
let arr3 = [80, ...arr1, 90];  //앞뒤로 추가하는 형태  ...안하면 []까지 같이 나옴
console.log(arr3);

console.log('');
/*
let arr4 = arr1;

console.log(arr1);
console.log(arr4);
arr4[2] = 30;
console.log(arr1); //얕은 복사라 둘다 바뀜
console.log(arr4);
*/
console.log('');

let arr4 = [...arr1]; //깊은 복사, 주소가 아니라 배열 자체의 값으로 새로운 배열
                      //원래 있는 배열에 영향X
//깊은복사 vs 얕은복사
//deep copy vs shallow copy

console.log(arr1);
console.log(arr4);
arr4[2] = 30;
console.log(arr1); 
console.log(arr4); //여기만 바뀜

console.log('');

//splice 함수: 중간을 추가, 삭제
let arr5 = [1,2,3,4,5];
console.log(arr5);
arr5.splice(1, 2); // (위치인덱스, 삭제할 갯수)
console.log(arr5); //2,3만 삭제됨
arr5.splice(1, 1, 30); //1인덱스 1개 지우고 그자리에 30추가
//arr5[1] = 30; 같은 의미
console.log(arr5);
arr5.splice(2,0,40); //2인덱스 위치에 삭제할 갯수0, 40추가
console.log(arr5);

console.log('');

let obj = {};  //중괄호 = 객체
console.log(obj);

obj.menu = '김밥';
obj.price = 3500; 
obj.price = 3800;  //수정도 그냥 변수에 재저장

delete obj.menu;  //키값 삭제

console.log(obj);

console.log('');
//--------------

let today = new Date(); //현재시간
//get 메서드  날짜시간정보 가져옴
//set 메서드  날짜시간정보 설정
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); //11월인데 10 --> 0~11  0이 1월, 10은 11월
console.log(today.getDate());  
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(Math.round(1.55)); //반올림
console.log(Math.trunc(123.123)); //소수점버림
