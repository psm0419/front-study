//obj02.js

let scores = [10, 30, 50, 40];

//for 반복문
for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//for in
for(let i in scores){ //인덱스 자체가 출력
    console.log(i + ' ' +scores[i]);
}

//for of
for(let item of scores){ //향상된 for문에 매칭,  scores에 있는 값 전부 저장
    console.log(item);
}

//forEach   매개변수로 함수를 넘김
scores.forEach( (item, index)=>{ //스코어 배열에 있는 값을 인덱스에 맞춰서 item에 넣어줌
    console.log(item + ' ' + index);
} )
//[10, 30, 50, 40]  (item, index)  -> item에 10, 인덱스에 0 순서대로 넣음