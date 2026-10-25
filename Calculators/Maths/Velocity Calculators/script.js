const distance_radio = document.querySelector('#distance');
const acc_radio = document.querySelector('#acclerationm');
const velocityans = document.querySelector('.velocity');
let acc;

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
    const distancee = document.querySelector('#numberr').value;
    const time = document.querySelector('#time').value;

    if(!distancee || !time){
        alert("Please enter all of the values!");
    }
    acc = distancee/time;
    velocityans.value = acc.toFixed(2);
})