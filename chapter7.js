//Array
var empty = [];
var primes = [2, 3, 5, 7, 11];
var misc = [1.1, true, 'a', ];

var base = 1024;
var table = [base, base + 1, base + 2, base + 3];
var b = [[1,{x: 1, y: 2}], [2, {x: 3, y:4}]];
var count = [1, , 3];
var undefs = [,,];

var a = new Array();
var a = new Array(10);
var a = new Array(5, 4, 3, 2, 1, 'testing, testing');

var a = ['world'];
var value = a[0];
console.log(value);
a[1] = 3.14;
i = 2;
a[i] = 3;
a[i + 10] = 'hello';
a[a[i]] = a[0];
console.log(a);

o = {};
o[1] = 'one';

a.length = 4;
console.log(a);

a[-1.23] = true;
a['1000'] = 0;
console.log(a[1.000]);

a = new Array();
a = [];
a[1000] = 0;

var a1 = [,,,];
var a2 = new Array();
console.log(0 in a1);
console.log(0 in a2);

var a1 = [,];
var a2 = [undefined];
console.log(0 in a1);
console.log(0 in a2);


//length
console.log([].length);
console.log(['a', 'b', 'c'].length);
a = [1, 2, 3, 4, 5];
a.length = 3;
console.log(a);
a.length = 0;
console.log(a);
a.length = 5;
console.log(a);
a = [1, 2, 3];
Object.defineProperty(a, 'length', {writable:false});
a.length = 0;
console.log(a);


//add and delete
a = [];
a[0] = 'zero';
a[1] = 'one';
console.log(a);
a = [];
a.push('zero');
a.push('one', 'two');
console.log(a);

a = [1, 2, 3];
delete a[1];
console.log(1 in a);
console.log(a.length);


//pass
var keys = Object.keys(o);
var values = [];
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    values[i] = o[key];
}

for (var i = 0, len = keys.length; i < len; i ++) {
    //
}

for (var i = 0; i < a.length; i++) {
    if (a[i] === undefined) {
        continue;
    }
    //
}

for(var i = 0; i < a.length; i ++) {
    if(!(i in a)) {
        continue;
    }
    //
}

var sparseArray = [1, , 3];
for (var index in sparseArray) {
    var value = sparseArray[index];
    //
}

for (var i in a) {
    if (!a.hasOwnProperty(i)){
        continue;
    }
    //
}

for (var i in a) {
    if (String(Math.floor(Math.abs(Number(i)))) !== i) {
        continue;
    }
}

var data = [1, 2, 3, 4, 5];
var sumOfSquare = 0;
data.forEach(function(x) {
    sumOfSquare += x*x;
});
console.log(sumOfSquare);


//matrix
var table = new Array(10);
for (var i = 0; i < table.length; i++) {
    table[i] = new Array(10);
}
for (var row = 0; row < table.length; row ++){
    for (col = 0; col < table[row].length; col++){
        table[row][col] = row*col;
    }
}
var product = table[5][7];
console.log(product);


//functions
var a = [1, 2, 3];
console.log(a.join());
console.log(a.join(' '));
console.log(a.join(''));
var b = new Array();
console.log(b.join('-'));

var a = [1, 2, 3];
console.log(a.reverse().join());

var a = new Array('banana', 'cherry', 'apple');
console.log(a.sort());
var s = a.join(', ');
console.log(s);