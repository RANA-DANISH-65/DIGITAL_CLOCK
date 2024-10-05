let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let dateElem= document.getElementById("date")
let dayElem=document.getElementById("day")
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getting=()=>{
    let date=new Date();
    
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let day = date.getDay();
    hrs.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
    dateElem.innerHTML=date.getDate();
    dayElem.innerHTML = daysOfWeek[day];

}
setInterval(getting,1000)
getting();