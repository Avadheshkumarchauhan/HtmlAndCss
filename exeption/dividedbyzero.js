let d=0
try{
let x=14;
let y=0;
if(y==0){
    throw new Error("Not devided");
    }
    d=x/y
}
catch(err){
    console.log("Error : ",err);
   
    
}finally{
    console.log("End of code");
    
}
console.log("Result : ",d);
