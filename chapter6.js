var empty = {};
var point = {
    x: 0,
    y: 0
};
var point2 = {
    x: point.x,
    y: point.y
};
var book = {
    "main title": 'Jacascript',
    'sub-title':'The Definitive Guide',
    "for": 'all audience',
    author: {
        firstname: 'David',
        surname: 'Flanagan'
    }
};


//new
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp();


//Object.create()
var o1 = Object.create({
    x: 1,
    y: 2
});
var o2 = Object.create(null);
var o3 = Object.create(Object.prototype);//like {} or new Object()

function inherit(p) {
    if (p == null) {
        throw new TypeError();
    }
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== 'object' && t !== 'function') {
        throw new TypeError();
    }
    function f() {};
    f.prototype = p;
    return new f();
}

var o = {
    x: "don't change this value"
};
// library_function(inherit(o));


var author = book.author;
var name = author.surname;
var title = book['main title'];
console.log(author + name + title);
book.edition = 6;
book['main title'] = 'ECMAScript';

var addr = '';
// for (i = 0; i < 4; i++) {
//     addr += customer['address' + i] + '\n';
// }

function addstock(portfolio, stockname, shares) {
    portfolio[stockname] = shares;
}

function getvalue(portfolio) {
    var total = 0.0;
    for(stock in portfolio) {
        var shares = portfolio[stock];
        var price = getquote(stock);
        total += shares * price;
    }
    return total;
}

var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
console.log(q.x + q.y);

var unitcircle = {
    r: 1
};
var c = inherit(unitcircle);
c.x = 1;
c.y = 1;
c.r = 2;
console.log(unitcircle.r);

console.log(book.subtitle);

// var len = book.subtitle.length;
// console.log(len);

var len = undefined;
if (book) {
    if (book.subtitle) {
        len = book.subtitle.length;
    }
}
var len = book && book.subtitle && book.subtitle.length;

delete book.author;
delete book['main title'];
console.log(book);

//return true
o = {
    x: 1
};
delete o.x;
console.log(delete o.x);
console.log(delete o.toString);
console.log(delete 1);

//return false
delete Object.prototype;
var x = 1;
delete this.x;
function f () {};
delete this.f;

this.x = 1; //no var
delete x;


//exam attribute
var o = {
    x: 1
};
console.log('x' in o);
console.log('y' in o);
console.log('toString' in o);

console.log(o.hasOwnProperty('x'));
console.log(o.hasOwnProperty('y'));
console.log(o.hasOwnProperty('toString'));

var o = inherit({
    y: 2
});
o.x = 1;
o.propertyIsEnumerable('x');
o.propertyIsEnumerable('y');
Object.prototype.propertyIsEnumerable('toString');

var o = {
    x: 1
};
console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log(o.toString !== undefined);

var o = {
    x: undefined
};
console.log(x !== undefined);
// console.log(y !== undefined); //false
console.log('x' in o);
console.log('y' in o);
delete o.x;
console.log('x' in o);

if (o.x != null) {
    o.x *= 2;
}
if (o.x) {
    o.x *= 2;
}


//enumerable
var o = {
    x: 1,
    y: 2,
    z: 3
};
console.log(o.propertyIsEnumerable('toString'));
for (p in o) {
    console.log(p);
}

function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}
function merge(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty[prop]) {
            continue;
        }
        o[prop] = p[prop];
    }
    return o;
}
function restrict(o, p) {
    for (prop in p) {
        if (! (prop in p)){
            delete o[prop];
        }
    }
    return o;
}
function substract(o, p) {
    for(prop in p) {
        delete o[prop];
    }
    return o;
}
function union(o, p) {
    return extend(extend({}, o), p);
}
function intersection(o, p) {
    return restrict(extend({}, o), p);
}
function keys(o) {
    if (typeof o != 'objects') {
        throw new TypeError();
    }
    var result = [];
    for (var prop in o) {
        if (o.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}


//getter and setter
var o = {
    data_prop: 'value',

    get accessor_prop() {
        /**/
    },
    set accessor_prop(value) {
        /**/
    }
}

var p = {
    x: 1.0,
    y: 1.0,

    get r() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    }
}

var q = inherit(p);
q.x = 1, q.y = 1;
console.log(q.r);
console.log(q.theta);

var serialnum = {
    $n: 0, //$ means private

    get next() {
        return this.$n;
    },
    set next(n) {
        if(n >= this.$n){
            this.$n = n;
        }else{
            throw 'n cant lless than $n';
        }
    }
}

var random = {
    get octet() {
        return Math.floor(Math.random()*256);
    },
    get unit16() {
        return Math.floor(Math.random()*65536);
    },
    get int16() {
        return Math.floor(Math.random()*65536) - 32768;
    }
}


//features of attribute
console.log(Object.getOwnPropertyDescriptor({x: 1},'x'));
console.log(Object.getOwnPropertyDescriptor(random,'octet'));
console.log(Object.getOwnPropertyDescriptor({},'x'));
console.log(Object.getOwnPropertyDescriptor({},'toString'));

var o = {};
Object.defineProperty(o, 'x', {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});
console.log(o.x);
console.log(Object.keys(o));

Object.defineProperty(o, 'x', {writable: false});
console.log(o.x = 2);
console.log(o.x);
Object.defineProperty(o, 'x', {value: 2});
console.log(o.x);
Object.defineProperty(o, 'x', {get function() {
    return o;
}});

var p = Object.defineProperties({}, {
    x: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    },
    y: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true
    },
    r: {
        get: function() {
            return Math.sqrt(this.x*this.x + this.y*this.y);
        },
    }
});

Object.defineProperty(Object.prototype,
    'extend',
    {
        writable: true,
        enumerable: true,
        configurable: true,
        value: function(o){
            var names = Object.getOwnPropertyNames(o);
            for (var i = 0; i < names.length; i++) {
                if (names[i]) {
                    continue;
                }
                var desc = Object.getOwnPropertyDescriptor(o, names[i]);
                Object.defineProperty(this, names[i], desc);
            }
        }
    }
);


var p = {
    x: 1
};
var o = Object.create(p);
console.log(p.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(o));

function classof(o) {
    if (o === null) {
        return 'Null';
    }
    if (o === undefined) {
        return 'Undefined';
    }
    return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classof(null));
console.log(classof(1));
console.log(classof(''));
console.log(classof(false));
console.log(classof({}));
console.log(classof([]));
console.log(classof(/./));
console.log(classof(new Date()));
// console.log(classof(window));
function f() {};
console.log(classof(new f()));

var o = Object.seal(
            Object.create(
                Object.freeze({x :1}),
                {
                    y: {
                        value: 2,
                        writable: true
                    }
                }
                )
        );


o = {
    x: 1,
    y: {
        z: [false, null ,'']
    }
};
s = JSON.stringify(o);
console.log(s);
p = JSON.parse(s);
console.log(p);

exports.union = union;
exports.extend = extend;