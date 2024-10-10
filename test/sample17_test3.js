//3. func2("홍길동", "30", func3);
//위 코드의 실행 결과로 "홍길동님의 나이는 30입니다"가 출력되도록
//func2, func3를 정의하시오.
//또한, 코드 작성이 완료된 후 func3를 익명함수, 화살표 함수로 바꿔보시오.


function func2(name, age, callback) {
    callback(name, age);
};
function func3(name, age){
    console.log(`${name}님의 나이는 ${age}입니다.`)
};
func2("홍길동", "30", func3);



func2("홍길동", "30", function (name, age) {
    console.log(`${name}님의 나이는 ${age}입니다.`)
});
func2("홍길동", "30", (name, age)=>{console.log(`${name}님의 나이는 ${age}입니다.`);
});