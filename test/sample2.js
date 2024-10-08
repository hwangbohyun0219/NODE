function printFunc(param){
    param(1, 2);
}

printFunc(function (x, y){
    console.log(x+y)
});

 //화살표함수
printFunc((x, y) => {
    console.log(x*y);
});

printFunc((x,y) => console.log(x*y));