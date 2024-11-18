//obj01.js

let scores = [10, 30, 50, 40];

console.log(scores[3]);
//Run code = ctrl alt n

//object

//JSON : JavaScript Object Notation
//{ key : value }

let weather = '맑음';
console.log(weather);

let weatherInfo = { //이게 json 표현 방식
                weather : '맑음',
                temp : 2,
                location : 'cheonan'
                };
console.log(weatherInfo.weather);
console.log(weatherInfo.temp);
console.log(weatherInfo.location);

// 점심식사정보 짜장면  5000 대천반점 천안시장내부
let lunchInfo = {
    menu : '짜장면',
    price : 5000,
    shop : '대천반점',
    location : '천안시장내부'
};

//객체, 배열
//    + 객체 :배열
//배열 : 객체

//객체안에 배열
let shopInfo ={
    name : '대천반점',
    location : '천안시장내부',
    menu : ['짜장면', '짬뽕', '볶음밥']
};
console.log(shopInfo.menu);

//배열 안에 객체
let shopInfo2 ={
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {   
            name : '짜장면',
            price: 5000
        },
        {   
            name : '짬뽕',
            price: 7000
        },
        {   
            name : '볶음밥',
            price: 7000
        }
    ]
};
console.log(shopInfo2.menu);  //메뉴 배열 정보
console.log(shopInfo2.menu[2]); // 2인덱스만
console.log(shopInfo2.menu[2].price); // 2인덱스의 가격만

//안에 계속 배열 객체 들어갈 수 있다
let shopInfo3 ={
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        {   
            name : '짜장면',
            price: 5000,
            raw : ['춘장', '양파', '돼지고기']
        },
        {   
            name : '짬뽕',
            price: 7000,
            raw : ['오징어', '면', '고춧가루']
        },
        {   
            name : '볶음밥',
            price: 7000,
            raw : ['달걀', '당근', '감자']
        }
    ]
};
console.log(shopInfo3.menu[0].raw);
console.log(shopInfo3.menu[0].raw[1]); //재료중에 양파만



let shopList =[
{ // 0인덱스
    name : '맘스터치',
    location : '천안길가',
    menu : [
        {   
            name : '싸이버거',
            price: 6000,
            raw : ['빵', '채소', '닭다리살']
        },
        {   
            name : '휠렛버거',
            price: 7000,
            raw : ['빵', '채소', '닭가슴살']
        }        
    ]
},
{ //1인덱스
name : '대천반점',
location : '천안시장내부',
menu : [
    {   
        name : '짜장면',
        price: 5000,
        raw : ['춘장', '양파', '돼지고기']
    },
    {   
        name : '짬뽕',
        price: 7000,
        raw : ['오징어', '면', '고춧가루']
    },
    {   
        name : '볶음밥',
        price: 7000,
        raw : ['달걀', '당근', '감자']
    }
    ]
}
];
//휠렛버거의 가격
console.log(shopList[0].menu[1].price);
//볶음밥의 재료들
console.log(shopList[1].menu[2].raw);
//싸이버거에 닭다리살 재료
console.log(shopList[0].menu[0].raw[2]);
//대천반점의 위치
console.log(shopList[1].location);