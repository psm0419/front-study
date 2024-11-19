/*
1.
비교1
true
true
true
비교2
true
true
true
비교3
true
true
true
*/
2.
const personInfo = {
name:"홍길동",
age:25,
phone:"010-1234-5678",
engName:"John Smith",
nickname:" 복습마왕 "
}

console.log('변경 전');
console.log(personInfo);


//간단한 방법
//personInfo.phone = ['010','1234','5678'];
//personInfo.engName = 'JHON SMITH';
//personInfo.nickname = '복습마왕'

//함수로 바꾸는 방법1
//personInfo.nickname = personInfo.nickname.trim();
//personInfo.engName = personInfo.engName.toUpperCase();
//personInfo.phone = [personInfo.phone.substring(0, 3), personInfo.phone.substring(4, 8), phone.substring(9, 13)];

//함수로 바꾸는 방법2
let substringPhone = personInfo.phone.substring(0, 3); //자르기
let substringPhone2 = personInfo.phone.substring(4, 8);
let substringPhone3 = personInfo.phone.substring(9, 13);
//split personInfo.phone = personInfo.phone.split("-");  -만 빠지고 숫자만 남음
let upperName = personInfo.engName.toUpperCase(); //대문자로
let trimNickname = personInfo.nickname.trim(); //공백제거


const personInfo2 = {
    name:"홍길동",
    age:25,
    phone: [substringPhone, substringPhone2, substringPhone3],
    engName: upperName,
    nickname: trimNickname
    }


console.log('변경 후');
console.log(personInfo2);

