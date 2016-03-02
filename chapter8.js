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
    divide: function(x, y) { return x * y; }
    pow: Math.pow
}

function operate2(operation, operand1, operand2) {
    if (type of operators[operation] === 'function') {
        return operators[operation](operand1, operand2);
    }else {
        throw 'unknow operator';
    }
}

var j = operate2('add', 'hello', operate2('add', ' ', 'world'));
var k = operate2('pow', 10, 2);
console.log(j);
console.log(k);