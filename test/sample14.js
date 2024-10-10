function test(callback,timer) {setTimeout(callback,timer)};
//test 함수를 만들어서 1초 뒤에 콜백함수가 실행되도록
test(()=> {console.log("첫번째 함수")},1000);


const test1 = ()=>{
    console.log("두번째 함수");
};
setTimeout(test1,1000);


