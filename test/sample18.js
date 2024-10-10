const fs =require("fs");

//콜백함수는 무조건 화살표함수를 생각해본다
fs.readdir("./", (err,files)=>{
    if(err){
        console.log("오류!!",err);
        return;
    }
    console.log(files);
});