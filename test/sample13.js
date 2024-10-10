//아래로 셋 다 같은 결과
function test(){
    console.log("테스트함수!");
}

setTimeout(test,2000);

//익명함수
setTimeout(function (){
    console.log("테스트함수!");
},2000);

setTimeout = (()=>{
    console.log("테스트함수!");
},2000);
