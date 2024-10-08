function delay(time) {
    return new Promise((resolve)=>setTimeout(resolve,time));
}
//await는 async안에 존재하여야 한다.
async function run(){
await delay(1000);
console.log(1);
await delay(1000);
console.log(2);
await delay(1000);
console.log(3);
}
run();