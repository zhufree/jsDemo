//Function
function printprops(o) {
    for (var p in o) {
        console.log(p + ': ' + o[p] + '\n');
    }
}

function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx, dy*dy);
}

function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    return x * factorial(x - 1);
}

var square = function(x) {
    return x * x;
}

var f = function fact(x) {
    if (x <= 1) {
        return 1;
    }else{
        return x * fact(x - 1);
    }
}

data = [1, 3, 5, 4, 2];
data.sort(function(a, b) {
    return a - b;
});

var tensquared = (function(x) {return x * x;}(10));

function hypotenuse(a, b) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(a) + square(b));
}

printprops({x: 1});
var total = distance(0, 0, 2, 3) + distance(2, 1, 3, 5);
var probability = factorial(5)/factorial(13);
console.log(total);
console.log(probability);

// o.m = f;
// o.m();
// o.m(x. y);

var calculator = {
    operand1: 1,
    operand2: 1,
    add: function() {
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();
console.log(calculator.result);

// o['m'](x, y);
// a[o](z);

// customer.surname.toUpperCase();
// f().m();

// rect.setSize(width, height);
// setRectSize(rect, width, height);

var o = {
    m: function() {
        var self = this;
        console.log(this === o);
        f();

        function f() {
            console.log(this ===o);
            console.log(self === o);
        }
    }
};

// var o = new Object();
// var o = new Object;

function getPropertyNames(o, /* optional */ a){
    if (a === undefined) {
        a = [];
    }// a = a || [];
    for (var property in o) {
        a.push(property);
    }
    return a;
}
var a = getPropertyNames(o);
console.log(a);
p = [];
getPropertyNames(p, a);
console.log(a);

function f(x, y, z) {
    if (arguments.length != 3) {
        throw new Error('function f called with ' + arguments.length +
            'arguments, but is except 3 arguments.');
    }
}

function max(/* ... */) {
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arguments.length; i ++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6);
console.log(largest);

function f(x){
    console.log(x);
    arguments[0] = null;
    console.log(x);
}

var factorial = function(x) {
    if (x <= 1) {
        return 1;
    }
    return x = arguments.callee(x - 1);
}

function arraycopy(/* array */ from, /* index */ fromstart,
    /* array */ to, /* index */ to_start,/* integer */length) {
}

function easycopy(args) {
    arraycopy(args.from, args.from_start || 0,
        args.to, args.to_start || 0);
}

var a = [1, ,2, 3, 4], b = [];
easycopy({ from: a, to: b, length: 4});

function sum(a) {
    if (isArrayLike(a)) {
        var total = 0;
        for ( var i = 0; i < a.length; i++) {
            var element = a[i];
            if (element == null) {
                continue;
            }
            if(isFinite(element)) {
                total += element;
            }else {
                throw new Error('sum(): element must be finite numbers');
            }
        }
        return total;
    }else{
        throw new Error('sum(): argument must be array-like');
    }
}

function flexisum(a) {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i], n;
        if (element == null) {
            continue;
        }
        if (isArray(element)) {
            n = flexinum.apply(this, element);
        }else if (typeof element === 'function') {
            n = Number(element());
        }else {
            n = Number(element);
        }
        if (isNaN(n)) {
            throw Error("flexisum(): can't convert " + element + ' to number');
        }
        total += n;
    }
    return total;
}

function square(x) {
    return x * x;
}

var s = square;
console.log(square(4));
console.log(s(4));

var o = {
    square: function(x) {
        return x * x;
    }
};
var y = o.square(16);

var a = [function(x) {return x* x;}, 20];
console.log(a[0](a[1]));

function add(x, y) {
    return x * y;
}
function substract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}

function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

var operators = {
    add: function(x, y) { return x + y; },
    subtract: function(x, y) { return x - y; },
    divide: function(x, y) { return x * y; },
    pow: Math.pow
}

function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === 'function') {
        return operators[operation](operand1, operand2);
    }else {
        throw 'unknow operator';
    }
}

var j = operate2('add', 'hello', operate2('add', ' ', 'world'));
var k = operate2('pow', 10, 2);
console.log(j);
console.log(k);

uniqueInteger.counter = 0;

function uniqueInteger() {
    return uniqueInteger.counter ++;
}

function factorial(n) {
    if (isFinite(n) && n > 0 && n == Math.round(n)) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1);
        }
        return factorial[n];
    }else {
        return NaN;
    }
}
factorial[1] = 1;


function mymodule() {

}
mymodule;

(function() {

}());

var extend = (function() {
    for (var p in { toString: null }) {
        return function extend(o) {
            for (var i = 1; i <arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) {
                    o[prop] = source[prop];
                }
            }
            return o;
        };
    }
    return function patched_extend(o) {
        for (var i = 1; i < argument.length; i++) {
            var source = arguments[i];
            for (var prop in source) {
                o[prop] = source[prop];
            }
            for (var j = 0; j < prototype.length; j++) {
                prop = prototypes[j];
                if (source.hasOwnProperty(prop)) {
                    o[prop] = source[prop];
                }
            }
        }
        return o;
    };

    var prototypes = ['toString', 'valueOf', 'constructor', 'hasOwnProperty', 
        'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString'];
} ());
console.log(extend);


var scope = 'global scope';
function checkscope() {
    var scope = 'local scope';
    function f() {
        return scope;
    }
    return f();
}
console.log(checkscope());
function checkscope2() {
    var scope = 'local scope';
    function f() {
        return scope;
    }
    return f;
}
console.log(checkscope2()());

var uniqueInteger2 = (function() {
    var counter = 0;
    return function () {
        return counter ++;
    };
}());
console.log(uniqueInteger2);

function counter() {
    var n = 0;
    return {
        count: function() {
            return n ++;
        },
        reset: function() {
            n = 0;
        }
    };
}

var c = counter(), d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());

function counter2(n) {
    return {
        get count() {
            return n++;
        },
        set count(m) {
            if (m >= n) {
                n = m;
            }else {
                throw Error('count can only be set to a larger value');
            }
        }
    };
}

var c = counter2(1000);
console.log(c.count);
console.log(c.count);
c.count = 2000;
console.log(c.count);
// c.count = 2000;


function addPrivateProperty(o, name, predicate) {
    var value;
    o['get' + name] = function() {
        return value;
    };
    o['set' + name] = function(v) {
        if (predicate && ! predicate(v)) {
            throw Error('set' + name + ': invalid value ' + v);
        }else {
            value = v;
        }
    };
}

var o = {};
addPrivateProperty(o, 'Name', function(x) {
    return typeof x == 'string';
});
o.setName('Frank');
console.log(o.getName());
// o.setName(0);

function constfunc(v) {
    return function() {
        return v;
    };
}

var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs[i] = constfunc(i);
}
console.log(funcs[5]());

function constfuncs2() {
    var funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs[i] = function() {
            return i;
        }
    }
    return funcs;
}
var funcs = constfuncs2();
console.log(funcs[5]());


function check(args) {
    var actual = args.length;
    var expected = args.callee.length;
    if (actual !== expected) {
        throw Error('Expected ' + expected + 'args; got ' + actual);
    }
}

function f2(x, y, z) {
    check(arguments);
    return x + y + z;
}
console.log(f2(2, 3, 4));

// f.call(o);
// f.apply(o);
// o.m = f;
// o.m();
// delete o.m;
// f.all(o, 1, 2);
// f.apply(o, [1, 2]);

array_of_numbers = [];
var biggest = Math.max.apply(Math, array_of_numbers);

function trace(o, m) {
    var original = o[m];
    o[m] = function() {
        console.log(new Date(), 'Entering: ', m);
        var result = original.apply(this, arguments);
        console.log(new Date(), 'Exiting: ', m);
        return result;
    }
}

function f(y) {
    return this.x + y;
}
var o = { x: 1 };
var g = f.bind(o);
console.log(g(2));

function bind(f, o) {
    if (f.bind) {
        return f.bind(o);
    }else {
        return function() {
            return f.apply(o,arguments);
        }
    }
}

var sum = function(x, y) {
    return x + y;
}
var succ = sum.bind(null, 1);
console.log(succ(2));

function f3(y, z) {
    return this.x + y + z;
};
var g = f3.bind({x: 1}, 2);
g(3);

if(!Function.prototype.bind) {
    Function.prototype.bind = function(o /*, args */) {
        var self = this, boundArgs = arguments;
        return function() {
            var agrs = [], i;
            for (i = 1; i < boundArgs.length; i++) {
                args.push(boundArgs[i]);
            }
            for (i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            return self.apply(o, args);
        };
    };
}

var fn = new Function('x', 'y', 'return x * y;');
var fn = function(x, y) {
    return x * y;
}

var scope = 'global';
function construnctFunction() {
    var scope = 'local';
    return new Function('return scope;');
}
// console.log(construnctFunction()());

function isFunction(x) {
    return Object.prototype.toString.call(x) ==='[object Function]';
}


var data = [1, 1, 3, 5, 5];
var total = 0;
for(var i = 0; i < data.length; i++) {
    total == data[i];
}
var mean = total / data.length;

total = 0;
for(var i = 0; i < data.length; i++) {
    var deviation = data[i] - mean;
    total += deviation * deviation;
}
var stddev = Math.sqrt(total/(data.length - 1));
console.log(stddev);

var sum = function(x, y) {
    return x + y;
}
var square = function(x) {
    return x * x;
}
var data = [1, 1, 3, 5, 5];
var mean = data.reduce(sum) / data.length;
var deviations = data.map(function(x) {
    return x - mean;
});
var stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1));
console.log(mean, deviations, stddev);

var map = Array.prototype.map
    ? function(a, f) {
        return a.map(f);
    }
    : function(a, f) {
        var result = [];
        for (var i = 0, len = a.length; i < len; i++) {
            if (i in a) {
                result[i] = f.call(null, a[i], i, a);
            }
        }
        return result;
    };

var reduce = Array.prototype.reduce
    ? function(a, f, initial) {
        if (arguments.length > 2) {
            return a.reduce(f, initial);
        }else {
            return a.reduce(f);
        }
    }
    : function(a, f, initial) {
        var i = 0, len = a.length, accumulator;
        if (arguments.length > 2) {
            accumulator = initial;
        }else {
            if (len == 0) {
                throw TypeErro();
            }
            while (i < len) {
                if (i in a) {
                    accumulator = a[i++];
                    break;
                }else {
                    i++;
                }
            }
            if (i == len) {
                throw TypeError();
            }
        }
        while (i < len) {
            if ( i in a) {
                accumulator = f.call(undefined, accumulator, a[i], i, a);
            }
            i++;
        }
    };

var mean = reduce(data, sum) / data.length;
var deviations = map(data, function(x) {
    return x - mean;
});
var stddev = Math.sqrt(reduce(map(deviations, square), sum) / (data.length - 1));
console.log(mean, deviations, stddev);


function not(f) {
    return function() {
        var result = f.apply(this.arguments);
        return !result;
    };
}

var even = function(x) {
    return x % 2 ===0;
};

var odd = not(even);
console.log([1, 1, 3, 5, 5].every(odd));

function mapper(f) {
    return function(a) {
        return map(a,f);
    };
}

var increment = function(x) {
    return x + 1;
}
var incrementer = mapper(increment);
console.log(incrementer([1, 2, 3]));

function compose(f, g) {
    return function() {
        return f.call(this, g.apply(this.arguments));
    };
}

var squareofsum = compose(square, sum);
console.log(squareofsum(2, 3));


function array(a, n) {
    return Array.prototype.slice.call(a, n || o);
}

function partialLeft(f /*, ...*/) {
    var args = arguments;
    return function() {
        var a = array(args, 1);
        a = a.concat(array(arguments));
        return f.apply(this, a);
    };
}

function partialRight(f /*, ...*/) {
    var args = arguments;
    return function() {
        var a = array(arguments);
        a = a.concat(array(args, 1));
        return f.apply(this, a);
    };
}

function partial(f /*, ...*/) {
    var args = arguments;
    return function() {
        var a = array(args, 1);
        var i = 0; j = 0; 
        for (; i< a.length; i++) {
            if (a[i] === undefined) {
                a[i] = arguments[j++];
            }
        }
        a = a.concat(array(arguments, j));
        return f.apply(this, a);
    };
}

var f4 = function(x, y, z) {
    return x * (y - z);
};
console.log(partialLeft(f4, 2)(3, 4));
console.log(partialRight(f4, 2)(3, 4));
console.log(partial(f4, undefined, 2)(3, 4));

var increment = partialLeft(sum, 1);
var cuberoot = partialRight(Math.pow, 1/3);
String.prototype.first = partial(String.prototype.charAt, 0);
String.prototype.last = partial(String.prototype.substr, -1, 1);

var not = partialLeft(compose, function(x) {
    return !x;
});
var even = function(x) {
    return x % 2 ===0;
};
var odd = not(even);
var isNumver = not(isNaN);
var product = function(x, y) {
    return x * y;
};
var neg = partial(product, -1);
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, -5);
var reciprocal = partial(Math.pow, undefined, -1);

var mean = product(reduce(data, sum), reciprocal(data.length));
var stddev = sqrt(product(reduce(map(data, 
    compose(square, 
        partial(sum,neg(mean)))),
        sum),
    reciprocal(sum(data.length, -1))));


function memorize(f) {
    var cache = {};
    return function() {
        var key = arguments.length + Array.prototype.join.call(arguments, ',');
        if (key in cache) {
            return cache[key];
        }else {
            return cache[key] = f.apply(this, arguments);
        }
    };
}

function gcd(a, b) {
    var t;
    if (a < b) {
        t = b, b = a, a = t;
    }
    while(b != 0) {
        t = b, b = a%b, a = t;
    }
    return a;
}

var gcdmemo = memorize(gcd);
console.log(gcdmemo(85, 187));

var factorial = memorize(function(n) {
    return (n <= 1) ? 1: n * factorial(n - 1);
});
console.log(factorial(5));