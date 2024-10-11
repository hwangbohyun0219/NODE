//4.2개의 숫자를 받아서 덧셈, 뺄셈을 하는 함수들의 집합 모듈을 만들고
//해당 모듈을 참조하여 해당 함수들을 호출하시오.  (calc.js)

const sum = (x, y)=>{
    console.log(x+y);
};
const minus= (x, y)=>{
    console.log(x-y);
};

module.exports = {sum, minus};