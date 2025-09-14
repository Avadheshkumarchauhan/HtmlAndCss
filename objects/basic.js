let obj = {id:103,name:"javascript",salary:50000};

console.log(obj);
console.log(obj.id);
console.log(obj.name);
console.log(obj.salary);
let emp = new Object();
emp.id=105;
emp['name']="avadhesh";
emp['course']="Fullstak";
console.log(emp);

function xyz(i,n,s){
    this.id=i;
    this.name=n;
    this['salary']=s

}
let x=new xyz(111,"Aman",45000);
console.log(x);


