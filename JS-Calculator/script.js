

const output = document.querySelector(".output");
const result= document.querySelector(".result");
const keys= document.querySelectorAll("button")

keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){

    let buttonText= this.innerText;
    console.log(buttonText);

    if(buttonText==='AC')
    {
        result.innerText="0";
        output.innerText="";
        
        result.style.animation="";
        output.style.animation="";
        return;

    }

    if(buttonText=="DEL"){

        output.textContent= output.textContent.substr(0,output.textContent.length-1);
        result.innerText= eval(output.innerText);
        if(result.innerHTML==="undefined")
        result.innerHTML="0";

        return ;

    }
    
    if(buttonText==="=")
    {
        console.log("its working")
       

        result.innerText= eval(output.innerText);

        result.style.animation="big 0.3s ease-in-out";
        output.style.animation="small 0.3s ease-in-out";

        result.style.animationFillMode="forwards";
        output.style.animationFillMode="forwards";

    }

    else{
        output.textContent+= buttonText;
        result.innerText= eval(output.innerText);
        return;

    }

}