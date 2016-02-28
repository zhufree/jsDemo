c6 = require('./chapter6');
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

var a = [33, 4, 1111, 222];
a.sort();
a.sort(function(a, b) {
    return a - b;
});
a.sort(function(a, b) {
    return b - a;
});

a = ['ant', 'Bug', 'cat', 'Dog'];
a.sort();
a.sort(function(s, t) {
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

var a = [1, 2, 3];
console.log(a.concat(4, 5));
console.log(a.concat([4, 5]));
console.log(a.concat([4, 5], [6, 7]));
console.log(a.concat(4, [5, [6, 7]]));

var a = [1, 2, 3, 4, 5];
console.log(a.slice(0, 3));
console.log(a.slice(3));
console.log(a.slice(1, -1));
console.log(a.slice(-3, -2));

var a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a.splice(4));
console.log(a.splice(1, 2));
console.log(a.splice(1, 1));

var a = [1, 2, 3, 4, 5];
console.log(a.splice(2, 0, 'a', 'b'));
console.log(a.splice(2, 3, [1, 2], 3));

var stack = [];
stack.push(1, 2);
stack.pop();
stack.push(3);
stack.pop();
stack.push(4, 5);
stack.pop();
stack.pop();

var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3, [4,5]);
a.shift();
a.shift();
a.shift();

console.log([1, 2, 3].toString());
console.log(['a', 'b', 'c'].toString());
console.log([1, [2, 'c']].toString());


//functions in ES5
var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(function(value) {
    sum += value;
});
console.log(sum);
data.forEach(function(v, i, a) {
    a[i] = v + 1;
});
console.log(data);

function foreach(a, f, t){
    try{
        a.forEach(f, t);
    }catch (e) {
        if (e == foreach.break) {
            return ;
        }else {
            throw e;
        }
    }
}
foreach.break = new Error('StopIteration');

a = [1, 2, 3];
b = a.map(function(x) {
    return x * x;
});

a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) {
    return x < 3;
});
console.log(smallvalues);
everyother = a.filter(function(x, i) {
    return i % 2 ==0;
});

var dense = sparseArray.filter(function() {
    return true;
});

a = a.filter(function(x) {
    return x !== undefined && x != null;
});

a = [1, 2, 3, 4, 5];
a.every(function(x) {
    return x < 10;
});
a.every(function(x) {
    return x % 2 ===0;
});
a.some(function(x) {
    return x % 2 ===0;
});
a.some(isNaN);

var sum = a.reduce(function(x, y) {
    return x + y;
}, 0);
var product = a.reduce(function(x, y) {
    return x * y;
}, 1);
var max = a.reduce(function(x, y) {
    return (x > y) ? x : y;
});
console.log(sum);
console.log(product);
console.log(max);

var a = [2, 3, 4];
var big = a.reduceRight(function(accmulator, value) {
    return Math.pow(value, accmulator);
});
console.log(big);

var objects = [{x: 1}, {y: 2}, {z: 3}];
var merged = objects.reduce(c6.union);

var objects = [{x: 1,a: 1}, {y: 2, a: 2}, {z: 3, a: 3}];
var leftunion = objects.reduce(c6.union);
var rightunion = objects.reduceRight(c6.union);

a = [0, 1, 2, 1, 0];
console.log(a.indexOf(1));
console.log(a.lastIndexOf(1));
console.log(a.indexOf(3));

function findall(a, x){
    var results = [],
    len = a.length,
    pos = 0;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) {
            break;
        }
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}


console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log([] instanceof Array);
console.log(({}) instanceof Array);

var isArray = Function.isArray || function(o) {
    return typeof p === 'object' &&
    Object.prototype.toString.call(o) === '[object Array]';
};

var a = {};
var i = 0;
while (i < 10) {
    a[i] = i * i;
    i ++;
}
a.length = i;
var total = 0;
for ( var j = 0; j < a.length; j++) {
    total += a[j];
};

function isArrayLike(o) {
    if (o && typeof o ==='object' &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296) {
        return true;
    }else{
        return false;
    }
};

var a = {'0': 'a', '1': 'b', '2': 'c', length:3};
console.log(Array.prototype.join.call(a, '+'));
console.log(Array.prototype.slice.call(a, 0));
console.log(Array.prototype.map.call(a, function(x) {
    return x.toUpperCase();
}));

//in ES5
console.log(Array.join(a, '+'));
console.log(Array.slice(a, 0));
console.log(Array.map(a, function(x){
    return x.toUpperCase();
}));

Array.join = Array.join || function(a, sep) {
    return Array.prototype.join.call(a, sep);
};
Array.join = Array.join || function(a, from, to) {
    return Array.prototype.slice.call(a, from, to);
};
Array.join = Array.join || function(a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
};


var s = 'test';
console.log(s.charAt(0));
console.log(s[1]);

s = 'JavaScript';
console.log(Array.prototype.join.call(s, ''));
console.log(Array.prototype.filter.call(s,function(x) {
    return x.match(/[^aeiou]/);
}).join(''));