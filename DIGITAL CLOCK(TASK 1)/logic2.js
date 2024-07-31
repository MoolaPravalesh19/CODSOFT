let hours=document.querySelector('#hours');
let mins=document.querySelector('#mins');
let seconds=document.querySelector('#secs');
console.log(hours);
console.log(mins);
console.log(seconds);

setInterval(()=>{
    let currentdate=new Date();
    hours.innerHTML=(currentdate.getHours()<10?"0":"")+currentdate.getHours();
    mins.innerHTML=(currentdate.getMinutes()<10?"0":"")+currentdate.getMinutes();
    seconds.innerHTML=(currentdate.getSeconds()<10?"0":"")+currentdate.getSeconds();
},1000)