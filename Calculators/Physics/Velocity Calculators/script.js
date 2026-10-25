const distance_radio = document.querySelector('#distance');
const acc_radio = document.querySelector('#acclerationm');
const velocityans = document.querySelector('.velocity');
let vel;
let distancee;
let time;
let acc;
let initvel;

// const distancee= document.querySelector('#distance')

acc_radio.addEventListener('change', (e)=>{
    e.preventDefault();
    document.querySelector('#distancee').style.display = "none";
    document.querySelector('#accleration').style.display = "flex";
})

distance_radio.addEventListener('change', (e)=>{
    e.preventDefault();
    document.querySelector('#accleration').style.display = "none";
    document.querySelector('#distancee').style.display= "flex";
})

document.querySelector('.submit').addEventListener('click', (e)=>{
    e.preventDefault();
    distancee = document.querySelector('#numberr').value;
    time = document.querySelector('#time').value;

    if(!distancee || !time){
        alert("Please enter all of the values!");
    }
    vel = distancee/time;
    velocityans.value = vel.toFixed(2);
})

document.querySelector('.submitt').addEventListener('click', (e)=>{
    e.preventDefault();
    initvel = parseInt(document.querySelector('#init-vel').value);
    acc = parseInt(document.querySelector('#acc').value);
    time = parseInt(document.querySelector('#timee').value);
    
    vel = (acc * time) + initvel;
    document.querySelector('#fin-vel').value = vel;
})
document.querySelector('#numberr').addEventListener('input', (e)=>{
    e.preventDefault();
    let newdistance = document.querySelector('#numberr').value;
    let newtime = document.querySelector('#time').value;
    document.querySelector('.velocity').value = newdistance/newtime;
})
document.querySelector('#time').addEventListener('input', (e)=>{
    e.preventDefault();
    let newtime = document.querySelector('#time').value;
    let newdistance = document.querySelector('#numberr').value;
    document.querySelector('.velocity').value = newdistance/newtime;
})