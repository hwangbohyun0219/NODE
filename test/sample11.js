function test(name, age){
    // ㅇㅇㅇ님 환영합니다.
    console.log(`${name}님의 나이는 ${age}입니다.`);
    console.log(name + "님의 나이는 " + age + "입니다.");
}

const test2 = function (name, age){
    console.log(name + "님의 나이는 " + age + "입니다.");
};

(function (name, age) {
    console.log(name + "님의 나이는 " + age + "입니다.");
}("박영희", 25))

test("홍길동" , 30);
test2("김철수" , 20);