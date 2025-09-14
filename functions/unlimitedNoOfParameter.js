function sumOfUnlimitedNumber(){
    let sum=0;
    for(let i=0;i<arguments.length;i++)
        sum+=arguments[i];
    return sum;
}

console.log(sumOfUnlimitedNumber(2 ,4,5,6,1,5));
console.log(sumOfUnlimitedNumber(2 ,4,5,6));
console.log(sumOfUnlimitedNumber(2 ,4,5,6,1,5,7));
console.log(sumOfUnlimitedNumber(2 ,4,5,6,1,5,7,));
