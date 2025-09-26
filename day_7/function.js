
function isODD(a){
    if(a%2 !==0){
        return "value is odd";
    }
    else{
        return "value is even";
    }
}
function isODDUsingTernary(a){
    return a%2 !==0 ? "value is odd" : "value is even";
}
console.log(isODDUsingTernary, "isODDUsingTernary");

//function as expression 
let funAsExpression = function idODD(){
    return a%2 !==0 ? "value is odd" : "value is even";
}
console.log(funAsExpression(2));