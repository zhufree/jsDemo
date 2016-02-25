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
    'main title': 'Jacascript',
    'sub-title':'The Definitive Guide',
    'for': 'all audience',
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
        throw TypeError();
    }
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== 'object' && t !== 'function') {
        throw TypeError();
    }
    function f() {};
    f.prototype = p;
    return new f();
}