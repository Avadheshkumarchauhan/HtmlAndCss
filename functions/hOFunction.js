const powerTwo = n =>n**2;

const powerCube = (n) =>powerTwo(n)*n;

console.log(powerCube(3));

/**
 * OR
 */

const powerTwo1 = n =>n**2;

const powerCube1 = (n) =>powerTwo1(n)*n;

console.log(powerCube1(5));


function sayHellow(){
    return ()=> "Hellow Avadhesh Kumar chauhan";

}
console.log(sayHellow());
console.log(sayHellow()());

let guessValue = sayHellow();

console.log(guessValue);
console.log(guessValue());


const highOrder = m=>{
    const oneFun =n=>{
        const twoFun =p=>{
            return m+n+p;
        }
        return twoFun;
    }
    return oneFun;
}

console.log(highOrder(4)(8)(9));



let arr = [2,5,7,8,3,1];
const sumArray =arr1=>{
    let sum=0;
    arr1.forEach( function(element) {
        sum+=element;
    })
    return sum;
}

console.log("Sum of array element :",sumArray(arr));

let arrr = [2,5,7,8,3,1,6,4,9];
const sumArray1 =arr1=>{
    let sum=0;
    arr1.forEach( element => {
        sum+=element;
    })
    return sum;
}

console.log("Sum of array element :",sumArray(arrr));

setInterval(()=>{
    console.log("Hello Interval : ",Math.random()*100);
    
},1000)
setTimeout(()=>{
    console.log("Hello setTimeout  ! ");
    
},10000)
