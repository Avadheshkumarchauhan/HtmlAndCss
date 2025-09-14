function displayMessage(){
    return "Hello , Avadhesh kumar chauhan"
}
console.log(displayMessage());
console.log(displayMessage());
console.log(displayMessage());

function add(x=10,y=9){
    return x+y;
}
console.log(add(2,4));
console.log(add());
console.log(add(2,));
console.log(add(2,4,));
console.log(add(2,4,5));

function somOfTwoNumber([x,y]){
    return x+y;
}
let twoNumber = [34,6,5,8,9]
console.log(somOfTwoNumber([4,6]));
console.log(somOfTwoNumber(twoNumber));
