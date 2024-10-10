//2
function func1(callback, x, y) {
    callback(x,y);
}

func1((x,y)=>{console.log(x+y);},10,20);

//console.log(callback); <틀린 것>
