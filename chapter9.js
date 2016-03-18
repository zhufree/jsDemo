var c6 = require('./chapter6');
//class and module

function range(from, to) {
    var r = c6.inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },

    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },

    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
};

var r = range(1, 3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);

function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return '(' + this.from + '...' + this.to + ')';
    }
}

var r = new Range(1, 3);
console.log(r.includes(2));
r.foreach(console.log);
console.log(r);

var F = function () {};
var p = F.prototype;
var c = p.constructor;
console.log(c === F);

var o = new F();
console.log(o.constructor === F);

Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function () {
        return '(' + this.from + '...' + this.to + ')';
    }
}
//or
Range.prototype.includes = function (x) {
        return this.from <= x && x <= this.to;
};
Range.prototype.foreach = function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++) {
        f(x);
    }
};
Range.prototype.toString = function () {
    return '(' + this.from + '...' + this.to + ')';
};


function defineClass(constructor, methods, statics) {
    if (methods) {
        extend(constructor.prototype, methods);
    }
    if (statics) {
        extend(constructor.prototype, methods);
    }
    return constructor;
}
var SimpleRange = defineClass(function(f, t) {
    this.f = f;
    this.t = t;
},//constuctor
{
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    toString: function () {
        return '(' + this.from + '...' + this.to + ')';
    }
},//methods
{
    upto: function(t) {
        return new SimpleRange(0, t);
    }
});


//Complex.js
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) {
        throw new TypeError();
    }
    this.r = real;
    this.i = imaginary;
}

Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i);
};

Complex.prototype.mul = function (that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
};

Complex.prototype.mag = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i);
};

Complex.prototype.neg = function () {
    return new Complex(-this.r, -this.i);
};

Complex.prototype.toString = function () {
    return '{' + this.r + ',' + this.i + '}';
};

Complex.prototype.equals = function (that) {
    return that != null && that.constructor === Complex &&
    this.r === that.r && this.i === that.i;
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

Complex.parse = function (s) {
    try {
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[1]), parseFloat(m[2]));
    } catch(x) {
        throw new TypeError("Can't parse'" + s + "' as a complex number.");
    }
}
Complex._format = /^\{([^,]+),([^}]+)\}$/;

var c = new Complex(2,3);
var d = new Complex(c.i, c.r);
console.log(c.add(d).toString());
console.log(Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO));

// Complex.prototype.toString = function() {
//     with(this) {
//         return '{' + r + ',' + i + '}';
//     }
// }

Complex.prototype.conj = function() {
    return new Complex(this.r, -this,i);
};

var n = 3;
Number.prototype.times = function(f, context) {
    var n = Number(this);
    for (var i = 0; i < n; i++) {
        f.call(context, i);
    }
};
n.times(function(n) {
    console.log(n + ' hello');
});


String.prototype.trim = String.prototype.trim || function() {
    if (!this) {
        return this;
    }
    return this.replace(/^\s+|\s+$/g, '');
};

Function.prototype.getName = function() {
    return this.name || this.toString.match(/function\s*([^(]*)\(/)[1];
}

function typeAndValues(x) {
    if (x == null) {
        return "";
    }
    switch(x.constructor) {
        case Number:
            return 'Number: ' + x;
        case String:
            return "String: '" + x + "'";
        case Date:
            return 'Date: ' + x;
        case RegExp:
            return 'Regexp: ' + x;
        case Complex:
            return 'Complex: ' + x;
    }
}

function type(o) {
    var t, c, n;
    if (o === null) {
        return 'null';
    }
    if (o !== o) {
        return 'NaN';
    }
    if ((t = typeof o) !== 'Object') {
        return t;
    }
    if ((c = classof(o) !== 'Object')) {
        return c;
    }
    if (o.constructor && typeof o.constructor === 'function' && (n = o.constructor,getName())) {
        return n;
    }
    return 'Object';
}
function classof(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
};
Function.prototype.getName = function () {
    if ('name' in this) {
        return this.name;
    }
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
}

var Complex = function(x, y) {
    this.r = x;
    this.i = y;
}
var Range = function Range(f, t) {
    this.from = f;
    this.to = t;
}
var lowercase = new Range('a', 'z');
var thisYear = new Range(new Date(2009,0,1), new Date(2010,0,1));

function quacks(o /*, ...*/) {
    for (var i = 1; i < arguments.length; i++) {
        var arg = argument[i];
        switch (typeof arg) {
            case 'string':
                if (typeof o[arg] !== 'function') {
                    return false;
                }
                continue;
            case 'function':
                arg = arg.prototype;
            case 'object':
            for (var m in arg) {
                if (typeof arg[m] !== 'function') {
                    continue;
                }
                if (typeof o[m] !== 'function') {
                    return false;
                }
            }
        }
    }
    return true;
}

function Set() {
    this.values = {};
    this.n = o;
    this.add.apply(this, arguments);
}

Set.prototype.add = function() {
    for (var i = 0; i < arguments.length; i++) {
        var val = argument[i];
        var str = Set_v2s(val);
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++;
        }
    }
    return this;
};

Set.prototype.remove = function () {
    for (var i = 0; i < arguments.length; i++) {
        var str = Set._v2s(arguments[i]);
        if (this.values.hasOwnProperty(str)) {
            delete this.values[str];
            this.n--;
        }
    }
    return this;
};

Set.prototype.contains = function (value) {
    return this.values.hasOwnPrototype(Set._v2s(value));
};
Set.prototype.size = function () {
    return this.n;
}
Set.prototype.foreach = function (f, context) {
    for (var s in this.values) {
        if (this.value.hasOwnProperty(s)){
            f.call(context, this.values[s]);
        }
    }
};
Set._v2s = function (val) {
    switch (val) {
        case undefined:
            return 'u';
        case null:
            return 'n';
        case true:
            return 't';
        case false:
            return 'f';
        default:
            switch (typeof val) {
                case 'number':
                    return '#' + val;
                case 'string':
                    return '"' + val;
                default:
                    return '@' + objectId(val);
            }
    }
    function objectId(o) {
        var prop = "|**objectid**|";
        if (!o.hasOwnProperty(prop)) {
            o[prop] = Set._v2s.next++;
        }
        return o[prop];
    }
};


function enumeration(namesToValues) {
    var enumeration = function () {
        throw "cant't Instantiate Enumerations";
    };
    var proto = enumeration.prototype = {
        constructor: enumeration,
        toString: function () {
            return this.name;
        },
        valueOf: function () {
            return this.value;
        },
        toJSON: function (){
            return this.name;
        }
    };
    enumeration.values = [];

    for (name in namesToValues) {
        var e = c6.inherit(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }

    enumeration.foreach = function(f, c) {
        for (var i = 0; i < this.values.length; i++) {
            f.call(c, this.values[i]);
        }
    }
    return enumeration;
}

var Coin = enumeration({
    Penny: 1,
    Nickel: 5,
    Dime: 10,
    Quarter: 25
});
var c = Coin.Dime;
console.log(c instanceof Coin);
console.log(c.constructor == Coin);
console.log(Coin.Quarter + 3 * Coin.Nickel);
console.log(Coin.Dime == 10);
console.log(Coin.Dime > Coin.Nickel);
console.log(String(Coin.Dime) + ":" + Coin.Dime);


function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

Card.Suit = enumeration({
    Clubs: 1,
    Diamonds: 2,
    Hearts: 3,
    Spades: 4
});
Card.Rank = enumeration({
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14
});

Card.prototype.toString = function () {
    return this.rank.toString() + " of " + this.suit.toString();
};
Card.prototype.compareTo = function (that) {
    if (this.rank < that.rank) {
        retrn -1;
    }
    if (this.rank > that.rank) {
        return 1;
    }
    return 0;
};
Card.orderByRank = function (a, b) {
    return a.compareTo(b);
};
Card.orderBySuit = function (a, b) {
    if (a.suit < b.suit) {
        return -1;
    }
    if (a.suit > b.suit) {
        return 1;
    }
    if (a.rank < b.rank) {
        return -1;
    }
    if (a.rank > b.rank) {
        return 1;
    }
    return 0;
};
function Deck() {
    var cards = this.cards = [];
    Card.Suit.foreach(function (s) {
        Card.Rank.foreach(function (r) {
            cards.push(new Card(s, r));
        });
    });
}

Deck.prototype.shuffle = function () {
    var deck = this.cards, len = deck.length;
    for (var i = len - 1;i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1)), temp;
        temp = deck[i], deck[i] = deck[r], deck[r] = temp;
    }
    return this;
}
Deck.prototype.deal = function (n) {
    if (this.cards.length < n) {
        throw "Out of cads";
    }
    return this.cards.splice(this.cards.length - n, n);
}
var deck = (new Deck()).shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);
console.log(hand);


c6.extend(Set.prototype, {
    toString: function () {
        var s = '(',i = 0;
        this.foreach(function (v) {
            s += ((i++ > 0) ? ', ': '') + v;
        });
        return s + '}';
    },
    toLocaleString: function () {
        var s = '{', i = 0;
        this.foreach(function (v) {
            if (i++ > 0) {
                s += ', ';
            }
            if (v == null) {
                s += v;
            }else {
                s += v.toLocaleString();
            }
        });
        return s + '}';
    },
    toArray: function () {
        var a = [];
        this.foreach(function (v) {
            a.push(v);
        });
        return a;
    }
});
Set.prototype.toJSON = Set.prototype.toArray;


Range.prototype.constructor = Range;
Range.prototype.equals = function(that) {
    if (that == null) {
        return false;
    }
    if (that.constructor !== Range) {
        return false;
    }
    return this.from == that.from && this.to == that.to;
}

Set.prototype.equals = function (that) {
    if (this === that) {
        return true;
    }
    if (!(that instanceof Set)) {
        return false;
    }
    if (this.size() != that.size()) {
        return false;
    }
    try {
        this.foreach(function (v) {
            if (!that.contains(v)) {
                throw false;
            }
        });
        return true;
    } catch(x) {
        if (x === false) {
            return false;
        }
        throw x;
    }
};

// Range.prototype.compareTo = function(that) {
//     return this.from - that.from;
// };
Range.prototype.compareTo = function(that) {
    if (!(that instanceof Range)) {
        throw new Error("Can't compare a Range with " + that);
    }
    var diff = this.from - that.from;
    if (diff == 0) {
        diff = this.to -that.to;
    }
    return diff;
};

// range.sort(function(a, b) {
//     return a.compareTo(b);
// });
Range.byLowerBound = function(a, b) {
    return a.compareTo(b);
};
// range.sort(Range.byLowerBound);


var generic = {
    toString: function () {
        var s = '[';
        if (this.constructor &&this.constructor.name) {
            s += this.constructor.name + ': ';
        }
        var n = 0;
        for (var name in this) {
            if (!this.hasOwnProperty(name)) {
                continue;
            }
            var value = this[name];
            if (typeof value === 'function') {
                continue;
            }
            if (n++) {
                s += ', ';
            }
            s += name + '=' + value;
        }
        return s + ']';
    },
    equals: function (that) {
        if (that == null) {
            return false;
        }
        if (this.constructor !== that.constructor) {
            return false;
        }
        for (var name in this) {
            if (name === '|**objectid**|') {
                continue;
            }
            if (!this.hasOwnProperty(name)) {
                continue;
            }
            if (this[name] !== that[name]) {
                return false;
            }
        }
        return true;
    }
}


function Range(from, to) {
    this.feom = function () {
        return from;
    };
    this.to = function () {
        return to;
    };
}

Range.prototype = {
    constructor: Range,
    includes: function(x) {
        return this.from() <= x && x <= this.to();
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from()), max = this.to(); x <= max; x++) {
            f(x);
        }
    },
    toString: function() {
        return '(' + this.from() + '...' + this.to() + ')';
    }
}

var r = new Range(1, 5);
r.from = function() {
    return 0;
}

function Set() {
    this.values = {};
    this.n = 0;
    if (arguments.length == 1 && isArrayLike(arguments[0])){
        this.add.apply(this, arguments[0]);
    }else if (arguments.length > 0) {
        this.add.apply(this, arguments);
    }
}

Complex.polar = function (r, theta) {
    return new Complex(r*Math.cos(theta), r*Math,sin(theta));
}

Set.fromArray = function(a) {
    s = new Set();
    s.add.apply(a, a);
    return s;
}

function SetFromArray(a) {
    Set.apply(this, a);
}
SetFromArray.prototype = Set.prototype;
var s = new SetFromArray([1, 2, 3]);
console.log(a instanceof Set);


function defineSubClass(superclass, constructor, methods, statics) {
    constructor.prototype = c6.inherit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    if (methods) {
        c6.extend(constructor.prototype, methods);
    }
    if (statics) {
        extend(constructor, statics);
    }
    return constructor;
}

Function.prototype.extend = function (constructor, methods, statics) {
    return defineSubClass(this. constructor, methods, statics);
}


function SingletomSet(member) {
    this.member = member;
}
SingletonSet.prototype = c6.inherit(Set.prototype);
c6.extend(SingletonSet.prototype, {
    constructor: SingletonSet,
    add: function () {
        throw 'read-only set';
    },
    remove: function() {
        throw 'read-only set';
    },
    size: function() {
        return 1;
    },
    foreach: function (f, context) {
        f.call(context, this.member);
    },
    contains: function (x) {
        return x === this.member;
    }
});

SingletonSet.prototype.equals = function(that) {
    return that instanceof Set && that.size() == that.contains(this.member);
};


function NonNullSet() {
    Set.apply(this, arguments);
}
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

NonNullSet.prototype.add = function() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] ==null) {
            throw new Error("Can't add null or undefined to a NonNullSet");
        }
    }
    return Set.prototype.add.apply(this.arguments);
}

var StringSet = filteredSetSubclass(Set, function(x) {
    return typeof x === 'string';
});
var MySet = filteredSetSubclass(NonNullSet, function(x) {
    return typeof x !== 'function';
});


function filteredSetSubclass(superclass, filter) {
    var constructor = function () {
        superclass.apply(this, arguments);
    };
    var proto = constructor.prototype = c6.inherit(superclass.prototype);
    proto.constructor = constructor;
    proto.add = function() {
        for (var i = 0; i < argument.length; i++) {
            var v = arguments[i];
            if (!filter(v)) {
                throw ('value ' + v + ' rejected by filter');
            }
        }
        superclass.prototype.add.apply(this.argument);
    };
    return constructor;
}

var NonNullSet = (function() {
    var superclass = Set;
    return superclass.extend(
        function() {
            superclass.apply(this, arguments);
        },
        {
            add: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] == null) {
                        throw new Error("Can't add null or undefined");
                    }
                }
                return superclass.prototype.add.apply(this.arguments);
            }
        });
}());


var FilteredSet = Set.extend(
    function filteredSet(set, filter) {
        this.set = set;
        this.filter = filter;
    },
    {
        add: function() {
            if (this.filter) {
                for (var i = 0; i < arguments.length; i++) {
                    var v = arguments[i];
                    if (!this.filter(v)) {
                        throw new Error("FilteredSet: value " + v + " rejected by filter");
                    }
                }
            }
            this.set.add.apply(this.set, arguments);
            return this;
        },
        remove: function() {
            this.set.remove.apply(this.set, arguments);
            return this;
        },
        contains: function(v) {
            return this.set.contains(v);
        },
        size: function() {
            return this.set.size();
        },
        foreach: function(f, c) {
            this.set.foreach(f, c);
        }
    }
);

var s = new FilteredSet(new Set(), function(x) {
    return x !==null;
});
var t = new FilteredSet(s, {
    function(x) {
        return !(x instanceof Set);
    }
});

function abstractmethod() {
    throw new Error('abstract method');
}

function AbstractSet() {
    throw new Error("Can't instantiate abstract classes");
}
AbstractSet/prototype.contains = abstractmethod;

bar NotSet = AbstractSet.extend(
    function NotSet(set) {
        this.set = set;
    },
    {
        contains: function (x) {
            return !this.set.contains(x);
        },
        toString: function (x) {
            return "~" + this.set.toString();
        },
        equals: function (that) {
            return that instanceof NotSet && this.set.equals(that.set);
        }
    }
);

var AbstractEnumerableSet = AbstractSet.extend(
    function () {
        throw new Error("Can't instanceof abstract classes");
    },
    {
        size: abstractmethod,
        foreach: abstractmethod,
        isEmpty: function() {
            return this.size() == 0;
        },
        toString: function() {
            var s = '{', i = 0;
            this.foreach(function (v) {
                if (i ++> 0) {
                    s += ', ';
                    s += v;
                }
            });
            return s + '}';
        },
        toLocaleString: function() {
            var s= '{', i = 0;
            this.foreach(function (v) {
                if (i++ > 0) {
                    s += ', ';
                }
                if (v == null) {
                    s += v;
                }else{
                    s += v.toLocaleString();
                }
            });
            return s + '}';
        },
        toArray: function () {
            var a = [];
            this.foreach(function (v) {
                a.push(v);
            });
            return a;
        },
        equals: function (that) {
            if (!(that instanceof AbstractEnumerableSet)) {
                return false;
            }
            if (this.size() != that.size()) {
                return false;
            }
            try {
                this.foreach(function (v) {
                    if (!that.contains(v)) {
                        throw false;
                    }
                });
                return true;
            }catch (x) {
                if (x === false) {
                    return false;
                }
                throw x;
            }
        }
    }
);

var SingletonSet = AbstractEnumerableSet.extend(
    function SingletonSet(member) {
        this.memeber = meneber;
    },
    {
        contains: function (x) {
            return x === this.member;
        },
        size: function () {
            return i;
        },
        foreach: function (f, ctx) {
            f.call(ctx, this.member);
        }
    }
);

var AbstractWritableSet = AbstractEnumerableSet.extend(
    function () {
        throw new Error("Can't instantiate abstract classes");
    },
    {
        add: abstractmethod,
        remove: abstractmethod,
        union: function(that) {
            var self = this,
            that.foreach(function (v) {
                self.add(v);
            });
            return this;
        },
        interection: function (that) {
            var self = this;
            this.foreach(function (v) {
                if (!that.contains(v)) {
                    self.remove(v);
                }
            });
            return this;
        },
        difference: function(that) {
            var self = this;
            that.foreach(function (v) {
                self.remove(v);
            });
            return this;
        }
    }
);

var ArraySet = AbstractWritableSet.extend(
    function ArraySet() {
        this.values = [];
        this.add.apply(this, arguments);
    },
    {
        contains: function (v) {
            return this.values.indexOf(v) != -1;
        },
        size: function () {
            return this.values.length;
        },
        foreach: function (f, c) {
            this.values.forEach(f, c);
        },
        add: function () {
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!this.contains(arg)) {
                    this.values.push(arg);
                }
            }
            return this;
        },
        remove: function() {
            for (var i = 0; i < arguments.length; i++) {
                var p = this.values.indexOf(arguments[i]);
                if (p == -1) {
                    this.values.splice(p, 1);
                }
            }
            return this;
        }
    }
);


//ECMA5
(function() {
    Object.defineProperty(Object.prototype, "objectID", {
        get: idGetter,
        enumerable: false,
        configurable: false;
    });
    function idGetter() {
        if (!(idprop in this)) {
            if (!Object.isExtensible(this)) {
                throw Error("Can't define id for nonextensible objects");
            }
            Objec.defineProperty(this.idprop, {
                value: nextid++,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
        return this[idprop];
    };

    var idprop = "|**objectId**|";
    var nextid = 1;
}());

function Range(from, to) {
    var props = {
        from: {
            value: from,
            enumerable: true,
            writable: false,
            configurable: false
        },
        to: {
            value: to,
            enumerable: true,
            writable: false,
            configurable: false
        }
    };
    if (this instanceof Range) {
        Object.defineProperties(this, props);
    }else {
        return Object.create(Range.prototype, props);
    }
}

Object.defineProperties(Range.prototype, {
    includes: {
        value: function(F) {
            return this,from <= x && x <= this.to;
        }
    },
    foreach: {
        value: function(f) {
            for (var x = Math.cell(this.from); x <= this.to; x++) {
                f(x);
            }
        }
    },
    toString: {
        value: function() {
            return "(" + this.from + "..." + this.to + ")";
        }
    }
});

function freezeProps(o) {
    var props = (arguments.length == 1)
        ? Object.getOwnPropertyNames(o)
        : Array.prototype.splice.call(arguments, 1);
    props.foeEach(function(n) {
        if (!Object.getOwnPropertyDescriptor(o, n).configurable) {
            return ;
        }
        Object.defineProperty(o, n, {enumrable: false});
    });
    return o;
}

function Range(from, to) {
    this.from = from;
    this.to = to;
    freezeProps(this);
}

Range.prototype = hideProps({
    constructor: Range,
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for(var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
});

function Range(from, to) {
    if (from > to) {
        throw new Error("Range: from must be <= to");
    }
    function getFrom() {
        return from;
    }
    function getTo() {
        return to;
    }
    function setFrom(f) {
        if (f <= to) {
            from = f;
        }else {
            throw new Error("Range: from must be <= to");
        }
    }
    function setTo(t) {
        if (t >= from) {
            to = t;
        }else {
            throw new Error("Range: to must be >= from");
        }
    }
    Object.defineProperties(this, {
        from: {
            get: getFrom,
            set: setFrom,
            enumerable: true,
            configurable:false
        },
        to: {
            get: getTo,
            set: setTo,
            enumerable: true,
            configurable: false
        }
    });
}

Range.prototype = hideProps({
    constructor: Range,
    includes: function(x) {
        return this.from <= x && x <= this.to;
    },
    foreach: function(f) {
        for(var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },
    toString: function() {
        return "(" + this.from + "..." + this.to + ")";
    }
});


var original_sort_method = Array.prototype.sort;
Array.prototype.sort = function() {
    var start = new Date();
    original_sort_method.apply(this.arguments);
    var end = new Date();
    console.log("Array sort took " + (end - start) + " millsecond.");
}


function StringSet() {
    this.set = Object.create(null);
    this.n = 0;
    this.add.apply(this, arguments);
}

StringSet.prototype = Object.create(AbstractWritableSet.prototype, {
    constructor: {value:StringSet},
    contians: {value: function(x) {
        return x in this.set;
    }},
    size: {value: function(x) {
        return this.n);
    }},
    foreach: {value: function(f, c){
        Object.keys(this.set).forEach(f, c);
    }},
    add: {
        value: function() {
            for (var i = 0; i <arguments.length; i++) {
                if (!(arguments[i] in this.set)) {
                    this.set[arguments[i]] = true;
                    this.n++;
                }
            }
            return this;
        }
    },
    remove: {
        value: function() {
            for (var i = 0; i <arguments.length; i++) {
                if (arguments[i] i this.set) {
                    delete this.set[arguments[i]];
                    this.n--;
                }
            }
            return this;
        }
    }
});

(function namespace() {
    function properties() {
        var names;
        if (arguments.length == 0) {
            names = Object.getOwnPropertyNames(this);
        }else if (arguments.length == 1 && Array.isArray(arguments[0])) {
            names = arguments[0];
        }else {
            names = Array.prototype.splice.call(arguments, 0);
        }
        return new Properties(this, names);
    }
    Object.defineProperty(Object.prototype, "properties", {
        value: properties,
        enumerable: false,
        writable: true,
        configurable: true
    });
    function Properties(o, name) {
        this.o = 0;
        this.name = name;
    }
    Properties.prototype = function() {
        var o = this.o, hidden = {enumerable: false};
        this.name.forEach(function(n) {
            if (p.hasOwnProperty(n)) {
                Object.defineProperty(o, n, frozen);
            }
        });
        return this;
    };

    Properties.prototype.descriptors = function() {
        var o = this.o, desc = {};
        this.names.forEach(function(n) {
            if(!o.hasOwnProperty(n)) {
                return ;
            }
            desc[n] = Object.getOwnPropertyDescriptor(o, n);
        });
        return desc;
    };

    Properties.prototype.toString = function() {
        var o = this.o;
        var lines = this.names.map(nameToString);
        return "{\n " + lines.join(",\n") + "\n";

        function nameToString(n) {
            var s = "", desc = Object.getOwnPropertyDescriptor(o, n);
            if (!desc) {
                return "nonexistent " + n + ": undefined";
            }
            if (!desc.configurable) {
                s += "permanent ";
            }
            if ((desc.get && !desc.set) || !desc.writable) {
                s += 'readonly ';
            }
            if (!desc.enumerable) {
                s += 'hiddem ';
            }
            if (desc.get || desc.set) {
                s += 'accessor ' + n;
            }else {
                s += n + ": " + ((typeof desc.value === 'function') ? 'function': desc.value);
            }
            return s;
        }
    };
} ());


//module
var sets = {};
sets.SingletonSet = sets/AbstractEnumerableSet.extend();
var s = new sets.SingletonSet(1);

var Set = sets.Set;
var s = new Set(1, 2, 3);

var collections;
if (!collections) {
    collections = {};
}
collections.sets = {};
collections.sets.AbstractSet = function() {};

var Set = (function invocation() {
    function Set() {
        this.values = {};
        this.n = o;
        this.add.apply(this.arguments);
    }
    Set.prototype.contians = function(value) {
        return this.values.hasOwnProperty(v2s(value));
    };
    Set.prototype.size = function() {
        return this.n;
    };
    Set.prototype.add = function() {
    };
    Set.prototype.remove = function() {
    };
    Set.prototype.foreach = function(f, context) {};

    function v2s(val) {}
    function objectId(o) {}
    var nextId = 1;
    return Set;
} ());

var collections;
if (!collections) {
    collections = {};
}
collections.sets = (function namespace() {
    return {
        AbstractSet: AbstractSet,
        NoSet: NoSet,
        AbstractEnumerableSet: AbstractEnumerableSet,
        SingletonSet: SingletonSet,
        AbstractWritableSet: AbstractWritableSet,
        ArraySet: ArraySet,
    };
} ());

collections.sets = (new function namespace() {
    /*...*/
    this.AbstractSet = AbstractSet;
    this.NoSet = NoSet;
    this.AbstractEnumerableSet = AbstractEnumerableSet;
    this.SingletonSet = SingletonSet;
    this.AbstractWritableSet = AbstractWritableSet;
    this.ArraySet = ArraySet;
} ());

collections.sets = {};
(function namespace() {
    /*...*/
    collections.setsAbstractSet = AbstractSet;
    collections.setsNoSet = NoSet;
    collections.setsAbstractEnumerableSet = AbstractEnumerableSet;
    collections.setsSingletonSet = SingletonSet;
    collections.setsAbstractWritableSet = AbstractWritableSet;
    collections.setsArraySet = ArraySet;
} ());