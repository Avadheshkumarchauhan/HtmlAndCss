let arr = [111,2,3,55,44,33,6,8,"asd",'s'];
console.log(arr);
console.log(arr.pop());

arr.push(11,90,98); //add element last index of array
console.log(arr);
console.log(arr.pop());  //delete last element of array 
console.log(arr);
console.log(arr.shift());//delete first element of array 

console.log(arr);
arr.unshift(1000); //add element in first index 0f array

console.log(arr);

let arr1 = [222,453,678,908];
let arr3 = arr.concat(arr1);//cancat array and return array
console.log(arr3);
let arr4 = [...arr1,...arr];//
console.log(arr4);
let s= arr3.join("@"); //add array element to string and return string
console.log(s);
arr4.reverse();
console.log(arr4);
let arr5 = arr.slice(2,6);//sub array of array  index of array, last index of sub array
console.log(arr5);
arr5.splice(1,2,4,6,8,9);//add element at spacific index of array ->index ,No of delete element ,No of add element
console.log(arr5);
console.log(arr5.indexOf(55)); //not avaible element in array then return -1 index
console.log(arr5.indexOf(8)); //avaible element in array then return index



 