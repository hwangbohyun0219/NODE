const sum = function(x,y) {
    return x+y;
};
console.log(sum(10,20));

//sum을 화살표 함수로 변경
const sum2 = (x,y)=>{
    return x+y;
}

//return을 생략할 수가 있다//
const sum2_1 = (x,y)=>x+y;




console.log(sum2(10,20));

const print = function () {
    console.log("안녕하세요");
}


const print2 = () => {
    return "안녕하세요";
};
//
const print2_1 = name => console.log(`${name}님 안녕하세요.`);

const print3 = (function () {
});

const multiple1 = function (x,y){
    console.log(x*y);
}

const multiple2 = (x,y) => {
    console.log(x*y);
}
