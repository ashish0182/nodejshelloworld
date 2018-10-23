//for input we need this library
var process = require("process");

//to print in console
console.log("hello world");
var a = "ashit";
var b = "sharma";
//concat operator +
var result = a + " " + b ;
console.log(result);
var p = 1000;
var r = 50;
var t = 100;

//calculating S.I

var result = (p*r*t)/100;
console.log("simple interest = " + result);

/*var stdin = process.openStdin();
stdin.addListener("data",function(ptrstring){
console.log(ptrstring.toString());
 
//tconversion of input buffer to string array
var ptrarray = ptrstring.toString().trim().split(" ");
var arr = [];
for(var i=0;i<ptrarray.length;i++)
{
var gtr = Number(ptrarray[i]);
arr.push(gtr);
//console.log(gtr);
}

console.log(arr);
})*/

