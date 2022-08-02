const hourel= document.getElementById("hours");
const minel= document.getElementById("minutes");
const secodndel= document.getElementById("seconds");
const ampmel= document.getElementById("am-pm");

function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h=h>10?""+h:h;

    hourel.innerText=h;
    minel.innerText=m;
    secodndel.innerText=s;
    ampmel.innerText=ampm;

    setTimeout(() => {
        updateClock();
      }, 1000);

}
updateClock();
