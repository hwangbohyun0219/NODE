function print1(){
    console.log("첫번째 출력")
}

setTimeout(print1, 3000);

setTimeout(() => {
    console.log(2);
},3000);

setTimeout(function () {
    console.log(3);
},3000);