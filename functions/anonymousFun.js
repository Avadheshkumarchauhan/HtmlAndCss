const x = function(x){
    return x*x;
}
console.log(x(6));
const y= function(){
    console.log("Hello anonymous expression function");
    
}
y();

/**
 * imadiate or  self invok function
 */
(function(x){
    console.log(x*x);
    
})(5);

(function(){
    console.log("Hello anonymous self invok function");
    
})();
(function exe(){
    console.log("Hello  self invok function");
    
})();
