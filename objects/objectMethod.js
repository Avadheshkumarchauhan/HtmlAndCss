let obj = {
    id:101,
    name:"Avadhesh Kumar Chauhan",
    Age:21,
    course:"B.Tech",
    salary:null
}
console.log(`Object : `,obj);
delete obj.salary;
console.log(`Object : `,obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(...Object.entries(obj));
let x =Object.entries(obj);
console.log(x);

Object.seal(obj);// This function is seal allow updation  and not allow adding deletion value in boject
Object.freeze(obj);// This function is frees not allow updation deletion and adding value in boject
obj.id=122;
delete obj.course;
obj.email="xyx1@gmail.com";

console.log(obj);

let obj1 = Object.assign({addresh:"Meerut",gender:"male"},obj)

console.log(obj1);



