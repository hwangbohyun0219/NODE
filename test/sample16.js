const path = require("path");

//현재 작업 중인 경로를 찾아줌
var txtPath = path.join(__dirname, "qwer", "text.txt");
console.log(txtPath);

var dirPath = path.dirname("C:\\Users\\TJ-BU-700-P\\Desktop\\NODE\\test\\qwer\\text.txt");
console.log(dirPath);

var filename = path.basename("C:\\Users\\TJ-BU-700-P\\Desktop\\NODE\\test\\qwer\\text.txt", ".txt");
console.log(filename);