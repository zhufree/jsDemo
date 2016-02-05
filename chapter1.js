var x;
x = 0;
console.log(x);

x = 1;
x = 0.01;
x = "Hello World";
x = 'JavaScript';
x = true;
x = false;
x = null;
x = undefined;

var book = {
    topic: "JavaScript",
    fat: true
};

console.log(book.topic);
console.log(book["fat"]);
book.author = "Flanagan";
book.contents = {};

var primes = [2, 3, 5, 7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length - 1]);
primes[4] = 9;
primes[4] = 11;
var empty = [];
console.log(empty.length);

var points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];

var data = {
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]]
};

console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(points[1].x - points[0].x);
console.log("3" + "2");

var count = 0;
count++;
count--;
count += 2;
count *= 3;
console.log(count);

var x = 2, y = 3;
console.log(x == y);
console.log(x != y);
console.log(x < y);
console.log(x <= y);
console.log(x > y);
console.log(x >= y);
console.log('two' == 'three');
console.log('two' > 'three');
console.log(false == (x > y));

console.log((x == 2) && (y == 3));
console.log((x > 3) || (y < 3));
console.log(!(x == y));


function plus1(x){
    return x + 1;
}
console.log(plus1(y));

var square = function(x){
    return x * x;
};

console.log(square(plus1(y)));

var a = [];
a.push(1, 2, 3);
a.reverse();

points.dist = function(){
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};
points.dist();

function abs(x){
    if(x >= 0){
        return x;
    }else{
        return -x;
    }
}

function factorial(n){
    var product = 1;
    while(n > 1){
        product *= n;
        n--;
    }
    return product;
}
console.log(factorial(4));
function factorial2(n){
    var i, product = 1;
    for(i = 2; i <= n; i++){
        product *= 1;
    }
    return product;
}
console.log(factorial2(5));

function Point(x, y){
    this.x = x;
    this.y = y;
}
var p = new Point(1, 1);

Point.prototype.r = function(){
    return Math.sqrt(
        this.x * this.x + 
        this.y * this.y);
}
p.r();

