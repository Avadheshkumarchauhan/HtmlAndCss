class GetterSetter{
    
    #rating
    constructor(n,p,r){
        this.name=n;
        this.price=p;
        this.#rating=r;
    }
    setrating(r){
        if(r<0)return;
        this.#rating=r;
    }
    getrating(){
        console.log(this.#rating);
        
    }
    set ratingset(r){
        if(r<0)return;
        this.#rating=r;
    }
    get ratingget(){
        console.log("ratingget",this.#rating);
        
    }

}
const p = new GetterSetter("Iphone proMax",120000,5);
console.log(p);

p.setrating(20);
p.getrating();
console.log(p);
p.ratingset =30;
p.ratingget
