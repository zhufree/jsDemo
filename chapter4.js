console.log([1 + 2, 3 + 4]);
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var sparseArray = [1,,,,5];
console.log(sparseArray);

var p ={
    x: 2.3,
    y: -1.2
};
var q = {};
q.x = 2.3;
q.y = -1.2;

var rectangle = {
    upperLeft:{
        x: 2,
        y: 2
    },
    lowerRight:{
        x: 4,
        y: 5
    }
};

var side = 1;
var quare = {
    'upperLeft': {
        x: p.x,
        y: p.y
    },
    'lowerRight': {
        x: p.x + side,
        y: p.u + side
    }
}

var square = function(x){
    return x * x;
}


var o = {
    x: 1,
    y:{
        z: 3
    }
}
var a = [o, 4, [5, 6]];
console.log(o.x);
console.log(o.y.z);
console.log(o['x']);
console.log(a[1]);
console.log(a[2]['1']);
console.log(a[0].x);

// f(0);
// Math.max(x, y, z);
// a.sort();

console.log(1 + 2);
console.log('hello' + ' ' + 'there');
console.log('1' + '2');

console.log('1' + 2);
console.log(1 + {});
console.log(true + true);
console.log(2 + null);
console.log(2 + undefined);
console.log(1 + 2 + 'blind mice');
console.log(1 + (2 + 'blind mice'));

var i = 1,j = ++i;
console.log(i + ' ' + j);
var i = 1, j = i ++;
console.log(i + ' ' + j);

console.log(11 < 3);
console.log('11' < '3');
console.log('11' < 3);

var point = {
    x: 1,
    y: 1
};
console.log('x' in point);
console.log('z' in point);
console.log('toString' in point);

var data = [7, 8, 9];
console.log('0' in data);
console.log(1 in data);
console.log(3 in data);

var d = new Date();
console.log(d instanceof Date);
console.log(d instanceof Object);
console.log(d instanceof Number);
var a = [1, 2, 3];
console.log(a instanceof Array);
console.log(a instanceof Object);
console.log(a instanceof RegExp);

var o = {
    x: 1
};
var p =null;
console.log(o && o.x);
console.log(p && p.x);

// if(a == b){
//     stop();
// }
// (a == b) && stop();
// var max = max_width || preferences.max_width || 500;
function copy(o, p){
    p = p || {};
}
var p = 0, q = 1;
console.log(!(p && q) === !p || !q);
console.log(!(p || q) === !p && !q);
var a = 1,b = 2;
console.log((a = b) == 0);
i = j = k = 0;
var data = [1, 2, 3];

console.log(data[i++] *= 2);
console.log(data[i++] = data[i++] * 2);

console.log(eval('3+2'));
console.log(eval('function f(){return x+1;}'));

var geval = eval;
var x = 'global', y = 'global';
function f(){
    var x = 'local';
    eval('x += "changed";');
    return x;
}
function g(){
    var y = 'local';
    geval('y += "changed";');
    return y;
}
console.log(f(), x);
console.log(g(), y);

var x = -1;
console.log(x > 0? x: -x);

var greeting = 'hello' + (username ? username : 'there');
greeting = 'hello';
if(username){
    greeting += username;
}else{
    greeting += 'there';
}

var value = 1;
console.log(typeof value == 'string') ? "'" + value + "'" : value;
console.log(typeof(value));

var o = {
    x: 1,
    y: 2
};
delete o.x;
console.log(x in o);

var a = [1, 2, 3];
delete a[2];
2 in a;
a.length;

console.log(typeof o.x);
console.log(delete o.x);
console.log(delete o);
console.log(delete 1);
this.x = 1;
console.log(delete x);
console.log(x);

for(var i = 0, j = 10; i < j; i++, j--){
    console.log(i + j);
}
