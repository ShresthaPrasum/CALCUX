const speed = document.querySelector('#speedd');
const distance = document.querySelector('#dista');
const mass = document.querySelector('#mass');
const speedbtn = document.querySelector('#speed-btn');
const distancebtn = document.querySelector('#distance-btn');
const forcebtn = document.querySelector('#force-btn');

let fromspeed = document.querySelector('#speed');
let fromdistance = document.querySelector('#distance');
let fromforce = document.querySelector('#force');

let initspeed;
let finspeed;
let time;
let speeddd;
let timee;
let distancee;
let masss;
let forcee;
let acc;


speed.addEventListener('change', (e)=>{
    e.preventDefault();
    fromspeed.style.display = "block";
    fromdistance.style.display = "none";
    fromforce.style.display = "none";
})
distance.addEventListener('change', (e)=>{
    e.preventDefault();
    fromdistance.style.display = "block";
    fromspeed.style.display = "none";
    fromforce.style.display = "none";
})
mass.addEventListener('change', (e)=>{
    e.preventDefault();
    fromforce.style.display = "block";
    fromspeed.style.display = "none";
    fromdistance.style.display = "none";
})

speedbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    initspeed = parseFloat(document.querySelector('#u').value);
    finspeed = parseFloat(document.querySelector('#v').value);
    time = parseFloat(document.querySelector('#t').value);

    acc = (finspeed - initspeed) / time;
    document.querySelector('#a').value = acc.toFixed(2);
    console.log(acc);
})
distancebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    speeddd = parseFloat(document.querySelector('#sp').value);
    distancee = parseFloat(document.querySelector('#di').value);
    timee = parseFloat(document.querySelector('#ti').value);
    acc = (2 * (distancee - (speeddd * timee))) / (timee ** 2);
    document.querySelector('#acc').value = acc.toFixed(2);
    console.log(acc);
})
forcebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    masss = parseFloat(document.querySelector('#masss').value);
    forcee = parseFloat(document.querySelector('#forcee').value);
    acc = forcee/masss;
    document.querySelector('#accleration').value = acc.toFixed(2);
    console.log(acc);
})
document.querySelector('#u').addEventListener('input', (e)=>{
    e.preventDefault();
    initspeed = parseFloat(document.querySelector('#u').value);
    finspeed = parseFloat(document.querySelector('#v').value);
    time = parseFloat(document.querySelector('#t').value);
    if(isNaN(finspeed) || isNaN(initspeed) || isNaN(!acc) || isNaN(time)){
        console.log("didnt enter full details");
        document.querySelector('#a').value = 0;
    }else{
    acc = (finspeed - initspeed)/time;
    document.querySelector('#a').value = acc.toFixed(2);
    }
})
document.querySelector('#v').addEventListener('input', (e)=>{
    e.preventDefault();
    finspeed = parseFloat(document.querySelector('#v').value);
    initspeed = parseFloat(document.querySelector('#u').value);
    time = parseFloat(document.querySelector('#t').value);
    if(isNaN(finspeed) || isNaN(initspeed) || isNaN(acc) || isNaN(time)){
        console.log("no full details");
        document.querySelector('#a').value = 0;
    }else{
        acc = (finspeed - initspeed)/time;
        document.querySelector('#a').value = acc.toFixed(2);
    }
})
document.querySelector('#t').addEventListener('input', (e)=>{
     e.preventDefault();
    time = parseFloat(document.querySelector('#t').value);
    initspeed = parseFloat(document.querySelector('#u').value);
    finspeed = parseFloat(document.querySelector('#v').value);
    if(isNaN(finspeed) || isNaN(initspeed) || isNaN(acc) || isNaN(time)){
        console.log("no full details");
        document.querySelector('#a').value = 0;
    }else{
        acc = (finspeed - initspeed)/time;
        document.querySelector('#a').value = acc.toFixed(2);
    }
})
document.querySelector('#a').addEventListener('input', (e)=>{
    e.preventDefault();
    initspeed = parseFloat(document.querySelector('#u').value);
    finspeed = parseFloat(document.querySelector('#v').value);
    time = parseFloat(document.querySelector('#t').value);
    acc = document.querySelector('#a').value;
    if(isNaN(finspeed) || isNaN(initspeed) || isNaN(acc) || isNaN(time)){
        console.log("no full details");
        document.querySelector('#a').value = 0;
    }else{
        finspeed = (acc*time) + initspeed;
        document.querySelector('#v').value = finspeed.toFixed(2);
    }
})
document.querySelector('#sp').addEventListener('input', (e)=>{
    e.preventDefault();
    speeddd = document.querySelector('#sp').value;
    distancee = document.querySelector('#di').value
    timee = document.querySelector('#ti').value;
    if(isNaN(speeddd) || isNaN(distancee) || isNaN(timee) || isNaN(acc)){
        console.log("no full details ");
        document.querySelector('#acc').value = 0;
    }else{
        acc= (2 * (distancee - (speeddd * timee))) / (timee ** 2);
        document.querySelector('#acc').value = acc.toFixed(2);
    }
})
document.querySelector('#di').addEventListener('input', (e)=>{
    e.preventDefault();
    distancee = document.querySelector('#di').value;
    speeddd = document.querySelector('#sp').value;
    timee = document.querySelector('#ti').value;
    if(isNaN(distancee) || isNaN(speeddd) || isNaN(timee)|| isNaN(acc)){
        console.log("no details");
        document.querySelector('#acc').value = 0;
    }else{
        acc = (2 * (distancee - (speeddd * timee))) / (timee ** 2);
        document.querySelector('#acc').value = acc.toFixed(2);
    }
})
document.querySelector('#ti').addEventListener('input', (e)=>{
    e.preventDefault();
    timee = document.querySelector('#ti').value;
    speeddd = document.querySelector('#sp').value;
    distancee = document.querySelector('#di').value;
    if(isNaN(distancee) || isNaN(speeddd) || isNaN(timee)|| isNaN(acc)){
        console.log("no details");
        document.querySelector('#acc').value = 0;
    }else{
        acc = (2 * (distancee - (speeddd * timee))) / (timee ** 2);
        document.querySelector('#acc').value = acc.toFixed(2);
    }
})
document.querySelector('#acc').addEventListener('input', (e)=>{
    e.preventDefault();
    acc = document.querySelector('#acc').value;
    distancee = document.querySelector('#di').value;
    speeddd = document.querySelector('#sp').value;
    timee = document.querySelector('#ti').value;
    if(isNaN(distancee) || isNaN(speeddd) || isNaN(timee)|| isNaN(acc)){
        console.log("no details");
        document.querySelector('#acc').value = 0;
    }else{
        speeddd = (distancee / timee) - ((acc * timee) / 2);
        document.querySelector('#sp').value = speeddd.toFixed(2);
    }
})
document.querySelector('#masss').addEventListener('input', (e)=>{
    e.preventDefault();
    masss = parseFloat(document.querySelector('#masss').value);
    forcee = parseFloat(document.querySelector('#forcee').value);
    if(isNaN(masss) || isNaN(forcee)){
        console.log("nofull details");
        document.querySelector('#accleration').value = 0;
    }else{
        acc = forcee/masss;
        document.querySelector('#accleration').value = acc;
    }
})
document.querySelector('#forcee').addEventListener('input', (e)=>{
    e.preventDefault();
    masss = parseFloat(document.querySelector('#masss').value);
    forcee = parseFloat(document.querySelector('#forcee').value);
    if(isNaN(forcee) || isNaN(masss)){
        console.log("not full details");
        document.querySelector('#accleration').value = 0;
    }else{
        acc = forcee/masss;
        document.querySelector('#accleration').value = acc;
    }
})
document.querySelector('#accleration').addEventListener('input',(e)=>{
    e.preventDefault();
    masss = parseFloat(document.querySelector('#masss').value);
    forcee = parseFloat(document.querySelector('#forcee').value);
    acc = parseFloat(document.querySelector('#accleration').value);
    if(isNaN(forcee) || isNaN(masss)){
        console.log("not full details");
        document.querySelector('#accleration').value =0;
    }else{
        forcee = masss * acc;
        document.querySelector('#forcee').value = forcee.toFixed(2);
    }
})