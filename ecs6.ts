export class Hello{
	var content = `aaa
	bbb
	ccc`;
	//字符串连接
	var myname = "li hao";
	var getName = function(){
		return "li hao";
	}
	console.log("hello ${myname}");
	console.log(`hello ${getName()}`);
	console.log(`<div>
	${myname}
	</div>`);

	function test(tem,name,age){
		console.log(tem);
		console.log(name);
		console.log(age);
	}
	test`hello my name is ${myname},i'm ${getName}`;

	var hello:string = "zhzhzhzh";

	//声明类型

	hello = 13;  //这里会报错

	var hello:any = "zhzhzhzh";

	function test(name:string): string{
		return "";
	}
	//参数，函数依可声明参数

	function hh(a:string,b?:string,c:number = 11){
		console.log(a);
		console.log(b);
		console.log(c);
	}
	hh("qq");
	//？表示b参数为可选参数,c有默认值

	function func1(...args){
		args.forEach(function (arg){
			console.log(arg);
		})
	}
	func1(1,2,3);
	func1(2,3,4,5,6,7);
	//...args代表任意数量的参数

	function func1(a,b,c){
		console.log(a);
		console.log(b);
		console.log(c);
	}
	var args = [1,2];
	func1(...args);

	var args2 = [3,4,5,6,7];
	func1(...args2);
	//两次结果分别为1,2,undefind和3,4,5

	function do(){
		console.log(1);

		yield;

		console.log(2);
	}
	func1.next();
	//结果只会输出1,因为在yield出停住了
	func1.next();
	//接着往下执行
}
class Person{
	name: string;
	age: number;
}

var zhangsan: Person = new Person();
zhangsan.name = "zhangsan";
zhangsan.age = 18;