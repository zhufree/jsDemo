{
    x = Math.PI;
    cx = Math.cos(x);
    console.log('cos(pi) = ' + cx);
}

a = []
a.length = 10;
for(i = 0; i < a.length; a[i++] = 0) ;
console.log(a);

// if((a == 0) || (b == 0));
// o = null;

for(i = 0;i < a.length; a[i++] = 0)/* empty */;

var i;
var j = 0;
var p, q;
var name = 'free';
var greeting = 'hello' + name;
var x = 2.34, y = Math.cos(0.75), r, theta;
var x = 2,
f = function(x){
    return x*x;
},
y = f(x);

for(var i = 0; i < 10; i++){
    console.log(i);
}
for(var i = 0,j = 10; i < 10; i++, j--){
    console.log(i*j);
}
// for(var i in o){
//     console.log(i);
// }

//function
var f = function(x){
    return x + 1;
}
function f(x){
    return x +1;
}
console.log(f(3));

function hypotenuse(x, y){
    return Math.sqrt(x*x + y*y);
}
console.log(hypotenuse(1, 2));
function factorial(n){
    if(n <= 1){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

//if/else
var username;
if(username == null){
    username = 'John Doe';
}
if(!username){
    username = 'John Doe';
}

var address;
if(!address){
    address = '';
    message = 'Please specify a mailing address.'
}

var n = 3;
if(n == 1){
    console.log('You have 1 new message.');
}else{
    console.log('You have ' + n + ' new messages.');
}

i = j = 1;
k = 2;
if(i == j){
    if(j == k){
        console.log('i equals k');
    }
}else{
        console.log("i dosen't equal j");
}

//switch
function convert(x){
    switch(typeof x){
        case 'number':
            return x.toString(16);
        case 'string':
            return '"' + x + '"';
        default:
            return String(x);
    }
}
console.log(convert(5));

//while
var count = 0;
while(count < 10){
    console.log(count);
    count ++;
}

function printArray(a){
    var len = a.length, i = 0;
    if(len == 0){
        console.log('Empty Array');
    }else{
        do{
            console.log(a[i]);
        }while(++i < len);
    }
}
printArray([1, 2, 3]);

//for
for(var count = 0; count < 10; count ++){
    console.log(count);
}

var i, j, sum;
for(i = 0, j = 10; i < 10; i++, j--){
    sum += i*j;
}

function tail(o){
    for(; o.next; o = o.next) /* empty */ ;
    return 0;
}


//for/in
var o ={
    x: 1,
    y: 2,
    z: 3
}
for(var p in o){
    console.log(o[p]);
}
var a = [], i = 0;
for(a[i++] in o) /* empty */;
console.log(a);
for(i in a){
    console.log(i);
}


//labelname
var token;
mainloop: while(token != null){
    //
    continue mainloop;
    //
}


//break
target = 0;
for(var i = 0; i < a.length; i++){
    if(a[i] == target){
        break;
    }
}

// matrix = getData();
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var sum = 0, success = false;
compute_sum: if(matrix){
    for(var x = 0; x < matrix.length; x++){
        var row = matrix[x];
        if(!row){
            break compute_sum;
        }
        for(var y = 0; y < row.length; y ++){
            var cell = row[y];
            if(isNaN(cell)){
                break compute_sum;
            }
            sum += cell;
        }
    }
    success = true;
}


//continue
data=[];
for(i = 0; i <data.length; i++){
    if(!data[i]){
        continue;
    }
    total += data[i];
}


//return 
function square(x){
    return x * x;
}
console.log(square(2));

function display_object(o){
    if(!o){
        return;
    }
    //
}


//throw
function factorial(x){
    if(x < 0){
        throw new Error('x cant be a negative number.');
    }
    for(var f = 1; x > 1; f*= x, x--) /* empty */;
    return f;
}


//try/catch/finally
try{
    var n = Number(prompt('Input a integer', ''));
    var f = factorial(n);
    alert(n + '! = ' + f);
}catch(ex){
    alert(ex);
}


//with/debugger/use strict
with(document.forms[0]){
    name.value = '';
    address.value = '';
    email.value = '';
}