
exports.__esModule = true;
var Hello = (function () {
    function Hello() {
    }
    return Hello;
}());
exports.Hello = Hello;
var content = "aaa\n\tbbb\n\tccc";
//字符串连接
var myname = "li hao";
var getName = function () {
    return "li hao";
};
console.log("hello ${myname}");
console.log("hello " + getName());
console.log("<div>\n\t" + myname + "\n\t</div>");
function test(tem, name, age) {
    console.log(tem);
    console.log(name);
    console.log(age);
}
(_a = ["hello my name is ", ",i'm ", ""], _a.raw = ["hello my name is ", ",i'm ", ""], test(_a, myname, getName));
var hello = "zhzhzhzh";
//声明类型
hello = 13; //这里会报错
var hello = "zhzhzhzh";
function test(name) {
    return "";
}
//参数，函数依可声明参数
function hh(a, b, c) {
    if (c === void 0) { c = 11; }
    console.log(a);
    console.log(b);
    console.log(c);
}
hh("qq");
//？表示b参数为可选参数,c有默认值
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
func1(1, 2, 3);
func1(2, 3, 4, 5, 6, 7);
//...args代表任意数量的参数
function func1(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1, 2];
func1.apply(void 0, args);
var args2 = [3, 4, 5, 6, 7];
func1.apply(void 0, args2);
//两次结果分别为1,2,undefind和3,4,5
function () { }
do
    (function () {
        console.log(1);
        yield;
        console.log(2);
    });
while (func1.next());
//结果只会输出1,因为在yield出停住了
func1.next();
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var zhangsan = new Person();
zhangsan.name = "zhangsan";
zhangsan.age = 18;
var _a;
