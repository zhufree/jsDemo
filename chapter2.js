console.log(12);
console.log(1.2);
console.log("hello world");
console.log('Hi');
console.log(true);
console.log(false);
console.log(/javascript/gi);
console.log(null);

var i;
var my_variable_name;
var v13;
var _dummy;
var $str;

a = 3;b = 4;
console.log(a + ' ' + b);

var x = 0
;[x, x + 1, x + 2].forEach(console.log)


//chapter3

console.log(10000000);
console.log(0xff);//255
console.log(0xCAFE911);//212855057
console.log(0377);//255
console.log(.333333);
console.log(6.02e23);
console.log(1.4738223E-32);

var x = 5, y = 3, z = 7;
console.log(Math.pow(2, 53));
console.log(Math.round(.6));
console.log(Math.ceil(.6));
console.log(Math.floor(.6));
console.log(Math.abs(-5));
console.log(Math.max(x, y, z));
console.log(Math.min(x, y, z));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(3));
console.log(Math.pow(3, 1/3));
console.log(Math.sin(0));
console.log(Math.log(10));
console.log(Math.log(100)/Math.LN10);
console.log(Math.log(512)/Math.LN2);
console.log(Math.exp(3));

console.log(Infinity);
console.log(Number.POSITIVE_INFINITY);
console.log(1/0);
console.log(Number.MAX_VALUE + 1);
console.log(Number.NEGATIVE_INFINITY);
console.log(-Infinity);
console.log(-1/0);
console.log(-Number.MAX_VALUE-1);
console.log(NaN);
console.log(Number.NaN);
console.log(0/0);
console.log(Number.MIN_VALUE/2);
console.log(-Number.MIN_VALUE/2);
console.log(-1/Infinity);
console.log(-0);

var zero = 0;
var negz = -0;
console.log(zero === negz);
console.log(1/zero === 1/negz);

var x = .3 - .2;
var y = .2 - .1;
console.log(x == y);
console.log(x == .1);
console.log(y == .1);

var then = new Date(2011, 0, 1);
var later = new Date(2011, 0, 1, 17, 10, 30);
var now = new Date();
var elapsed = now - then;
console.log(later.getFullYear());
console.log(later.getMonth());
console.log(later.getDay());
console.log(later.getDay());
console.log(later.getHours());
console.log(later.getUTCHours());

console.log("");
console.log('testing');
console.log("3.14");
console.log('name="myform"');
console.log("Wouldn't you prefer O'Reilly's book?");
console.log("This string\nhas two lines");
console.log("pi is the radio of a circle's circumference to its diameter");

console.log("tow\nlines");
console.log("one\
		long\
		line");

console.log('You\'re right, it can\'t be a quote');

msg = "Hello, " + "world";
name = "free";
greeting = "Welcome to my blog," + " " + name;
console.log(msg);
console.log(greeting);

var s = "hello, world";
console.log(s.charAt(0));
console.log(s.charAt(s.length - 1));
console.log(s.substring(1, 4));
console.log(s.slice(1,4));
console.log(s.slice(-3));
console.log(s.indexOf("l"));
console.log(s.lastIndexOf("l"));
console.log(s.indexOf("l", 3));
console.log(s.split(", "));
console.log(s.replace("h", "H"));
console.log(s.toUpperCase());

var text = "testing: 1, 2, 3";
var pattern = /\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.match(pattern, "#"));
console.log(text.split(/\D+/));

var a = 4, b = 3;
console.log(a == 4);
if(a == 4){
	b = b + 1;
}else{
	a = a + 1;
}

var s = "test";
s.len = 4;
var t = s.len;
console.log(t);

var n = 1, b = true;
var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);

s = "hello";
s.toUpperCase();
console.log(s);

var o = {x:1};
o.x = 2;
o.y = 3;
var a = [1, 2, 3];
a[0] = 0;
a[3] = 4;

var p = {x:1};
console.log(o === p);

var a = [], b = [];
console.log(a === b);

var a = [];
var b = a;
b[0] = 1;
console.log(a[0]);
console.log(a === b);

var a = ['a', 'b', 'c'];
var b = [];
for(var i = 0; i < a.length; i ++){
	b[i] = a[i];
}

function equalArrays(a, b){
	if(a.length != b.length){
		return false;
	}
	for(var i = 0; i < a.length; i ++){
		if(a[i] !== b[i]){
			return false;
		}
	}
	return true;
}

console.log(10 + 'objects');
console.log('7' + '4');
var n = 1 - 'x';
console.log(n);
console.log(n + 'objects');

console.log(null == undefined);
console.log('0' == 0);
console.log(0 == false);
console.log('0' == false);

console.log(Number('3'));
console.log(String(false));
console.log(Boolean([]));
console.log(Object(3));

var n = 17;
binary_string = n.toString(2);
octal_string = '0' + n.toString(8);
hex_string = '0x' + n.toString(16);

var n = 123456.789;
console.log(n.toFixed(0));
console.log(n.toFixed(2));
console.log(n.toFixed(5));
console.log(n.toExponential(1));
console.log(n.toExponential(3));
console.log(n.toPrecision(4));
console.log(n.toPrecision(7));
console.log(n.toPrecision(10));

console.log(parseInt('3 blind mice'));
console.log(parseFloat(' 3.14 meter'));
console.log(parseInt('-12.34'));
console.log(parseInt('0xFF'));
console.log(parseInt('oxff'));
console.log(parseFloat('.1'));
console.log(parseInt('0.1'));
console.log(parseInt('.1'));
console.log(parseFloat('$72.47'));

console.log(parseInt('11', 2));
console.log(parseInt('ff', 16));
console.log(parseInt('zz', 36));
console.log(parseInt('077', 8));
console.log(parseInt('077', 10));

console.log([1, 2, 3].toString());
console.log((function(x){ f(x); }).toString());
console.log(/\d+/g.toString());
console.log(new Date(2010, 0, 1).toString());

var d = new Date(2010, 0, 1);
console.log(d.valueOf());

var now = new Date();
console.log(typeof(now + 1));
console.log(typeof(now - 1));
console.log(now == now.toString());
console.log(now > (now - 1));

var i;
var sum;
var i, sum;
var message = 'hello';
var i = 0, j = 0, k = 0;

for(var i = 0; i < 10; i++){
	console.log(i);
}
for(var i = 0, j = 10; i < 10; i++, j--){
	console.log(i * j);
}
for(var p in o){
	console.log(p);
}

var i = 10;
i = 'ten';
console.log(i);

var scope = 'global';
function checkscope(){
	var scope = 'local';
	return scope;
}
console.log(checkscope());

function checkscope2(){
	scope = 'local';
	myscope = 'local';
	return [scope, myscope];
}
console.log(checkscope2());
console.log(scope);
console.log(myscope);

var scope = 'global scope';
function checkscope3(){
	var scope = 'local scope';
	function nested(){
		var scope = 'nested scope';
		return scope;
	}
	return nested;
}
console.log(checkscope3());

function test(o){
	var i = 0;
	if(typeof 0 == 'object'){
		var j = 0;
		for(var k = 0; k < 10; k++){
			console.log(k);
		}
		console.log(k);
	}
	console.log(j);
}

var scope = 'global';
function f(){
	console.log(scope);
	var scope = 'local';
	console.log(scope);
}

var truevar = 1;
fakevar = 2;
this.fakevar2 = 3;
delete truevar;
delete fakevar;
delete fakevar2;