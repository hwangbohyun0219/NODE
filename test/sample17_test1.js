//1
//setTimeout :비동기적으로 실행된다.  /promise나 async나 away로 처리 가능
setTimeout(()=>{
    console.log("첫번째");
    setTimeout(()=>{
        console.log("두번째");
    },1000)
},1000)
