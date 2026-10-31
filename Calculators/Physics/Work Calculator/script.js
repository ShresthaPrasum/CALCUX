let force;
let angle;
let displacement;
let work;

const submitbtn = document.querySelector('#submitbtn');
submitbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    force = parseFloat(document.querySelector('#force').value);
    angle = parseFloat(document.querySelector('#angle').value);
    displacement = parseFloat(document.querySelector('#displacement').value);
    
    work = force * Math.cos(angle * (Math.PI / 180))* displacement;
    console.log(work.toFixed(2));
    document.querySelector('#work').value = work.toFixed(2);

})