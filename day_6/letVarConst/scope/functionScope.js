function fun(){
var a = 20;
let b = 30;
const pi = 3.14;
console.log("block Scope");
console.log("value of a in global scope: " , a);
console.log("value of b in global scope: " , b);
console.log("value of pi in global scope: " , pi);
}
fun();
    console.log("Outside the block:");
    console.log("value of a in outside the function: " , a);
    console.log("value of b in outside the function: " , b); //error
    console.log("value of c in outside the function: " , c); //error
