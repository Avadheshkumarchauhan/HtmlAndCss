let arr = new Array(2,5,8,3);
console.log(arr);

let arr1 = [3,6,9,1,5,8,7,4,2];
arr1.forEach(function(el, i,ar){
    console.log(i,el,ar);
    
});

arr.forEach((el,i,arrr) =>{
    console.log("Arrow : ",i,el,arr);
    
});
arr1.map((m) =>{
    console.log(m);
});

let heros = ["java","python","javascript","c++","ruby"];
heros.forEach((h) =>{
    console.log(h.toUpperCase());
    
});

heros.map((hm,i,hero) =>{
    console.log("Map  ",i,": ",hm,hero);
    
});

const result = heros.filter((h) =>{
        return h.startsWith('ja')
});
console.log(...result);

const even = arr1.filter((ev)=>{
    return ev%2==0;
});
console.log("Even number : ",even);


let sumOfArray = arr1.reduce((prev,cur)=>prev+cur,0);
console.log("Sum of array element : ",sumOfArray);


let checkNumber = arr.every((v)=> typeof v==="Number".toLowerCase());
console.log("Check : ",checkNumber);


let findvalue = arr1.find((n) =>n>6);
console.log(findvalue);

let shorArray = arr1.sort((a,b)=>a-b);
console.log(shorArray);
