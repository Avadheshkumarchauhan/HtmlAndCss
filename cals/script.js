try{
let strin= "";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
        strin =eval(strin);
        document.querySelector('input').value = strin;
    }
    else if(e.target.innerHTML == 'DE'){
        strin = strin. toString().slice(0,-1);
        document.querySelector('input').value = strin;
    }
    else if(e.target.innerHTML == 'AC'){
        strin = "";
        document.querySelector('input').value = strin;
    }
    else{
        console.log(e.target);
        strin = strin + e.target.innerHTML;
        document.querySelector('input').value = strin; 
    }
})
})
}
catch(err){
    console.log("Error: ",err);
}