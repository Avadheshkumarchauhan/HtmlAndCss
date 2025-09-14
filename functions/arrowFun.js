const sqr = x =>x**2;
const x = 6
console.log(`Square of ${x} : ${sqr(6)}`);

const sumOfTwoNumber = (a,b) =>a+b;
console.log(`Sum of two number : ${sumOfTwoNumber(3,9)}`);

const sumDifference =(m,n) => ({sum:m+n,difference:m-n});

console.log(sumDifference(6,3));

const obj = sumDifference(9,2);
console.log(obj.sum);
console.log(obj.difference);


