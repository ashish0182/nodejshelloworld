var process = require("process");

console.log("hello world");
var a = "ashit";
var b = "sharma";
var result = a + " " + b ;
console.log(result);
var p = 100;
var r = 50;
var t = 100;
var result = (p*r*t)/100;
console.log("simple interest = " + result);

var stdin = process.openStdin();
stdin.addListener("data",function(ptrstring){
console.log(ptrstring.toString());

var ptrarray = ptrstring.toString().trim().split(" ");
var arr = [];
for(var i=0;i<ptrarray.length;i++)
{
var gtr = Number(ptrarray[i]);
arr.push(gtr);
//console.log(gtr);
}

console.log(arr);
})
