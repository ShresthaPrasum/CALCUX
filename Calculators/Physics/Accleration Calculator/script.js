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