const http = require("http");

const server = http.createServer((req, res) => {
    const{method, url} = req;
    console.log(method, "===>", url);
    console.log("서버 호출 성공!");
    res.setHeader("Content_Type", "text/plain");
    if(url == "/main"){
        res.end("main!!");
    }else if(url == "/board"){
        res.end("board!!");
    }else{
        res.end("404 error address!!");
    }




    res.write("호출했다!!!");
    res.end();
});

server.listen(3000, ()=>{
    console.log("서버 실행 성공!!")
});


// 컨트롤씨 서버 강제 종료


