class ComplexNumber{
    #real;
    #imag;
    constructor(r ,i){
        this.#real=r;
        this.#imag=i;
    }
    display(){
        console.log(this.#real," + i",this.#imag);
        
    }
    get real(){
        return this.#real;
    }
    get imag(){
        return this.#imag;
    }
    addNumber(c){
        this.#real+=c.real;
        this.#imag+=c.imag  
    }
}
const c1=new ComplexNumber(2,3);
c1.display();
const c2=new ComplexNumber(3,5);
c2.addNumber(c1);
console.log("Sum of two complex number");

c2.display();
