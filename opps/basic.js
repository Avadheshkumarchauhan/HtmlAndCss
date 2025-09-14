 class Product{
    //properties -> variables --> data member
    /*
    This is a optional variable
    if variable is private then variable is innitilization
    */
    // name ;
    // price;
    #rating; //This is a private variable
    //Custam costructer
    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r;
       
        console.log("Hello constructer",this);
       
        
    }
    //behaviours --> function --> member functions
    //Create function without keyword
    dislay(){
        console.log("This refer to ",this);
        
        console.log("Displaying behaviours ! ",this.name,this.price,this.#rating);
        
    }
    //Create static method in js
    static custam(){
        console.log("Calling a static method");
        
    }
 }
 const p=new Product("Iphone 13 ",100000,5);//create new empty plain object
 console.log(p);
 p.dislay()
 Product.custam();//Callin static method in js className use
 