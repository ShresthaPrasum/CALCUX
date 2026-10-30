const speed = document.querySelector('#speedd');
const distance = document.querySelector('#dista');
const mass = document.querySelector('#mass');
const speedbtn = document.querySelector('#speed-btn');
const distancebtn = document.querySelector('#distance-btn');
const forcebtn = document.querySelector('#force-btn');

let fromspeed = document.querySelector('#speed');
let fromdistance = document.querySelector('#distance');
let fromforce = document.querySelector('#force');

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
    const initspeed = parseFloat(document.querySelector('#u').value);
    const finspeed = parseFloat(document.querySelector('#v').value);
    const time = parseFloat(document.querySelector('#t').value);

    let acc = (finspeed - initspeed) / time;
    document.querySelector('#a').value = acc.toFixed(2);
    console.log(acc);
})
distancebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const speeddd = parseFloat(document.querySelector('#sp').value);
    const distancee = parseFloat(document.querySelector('#di').value);
    const timee = parseFloat(document.querySelector('#ti').value);
    let acc = (2 * (distancee - (speeddd * timee))) / (timee ** 2);
    document.querySelector('#acc').value = acc.toFixed(2);
    console.log(acc);
})
forcebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const masss = parseFloat(document.querySelector('#masss').value);
    const forcee = parseFloat(document.querySelector('#forcee').value);
    let acc = forcee/masss;
    document.querySelector('#accleration ').value = acc.toFixed(2);
    console.log(acc);
})