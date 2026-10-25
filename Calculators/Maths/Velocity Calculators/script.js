const distance_radio = document.querySelector('#distance');
const acc_radio = document.querySelector('#acclerationm');

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