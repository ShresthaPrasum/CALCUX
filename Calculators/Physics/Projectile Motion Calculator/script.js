const submitbtn = document.querySelector('#submit');
submitbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const v = parseFloat(document.querySelector('#init-vel').value);
    const ang = parseFloat(document.querySelector('#angle').value);
    const height = parseFloat(document.querySelector('#init-height').value);

    if(!v || !ang || !height){
        alert("Please enter all 3 values properly!");
        return;
    }

    const angg = (ang*Math.PI)/180;
    const vx = v* Math.cos(angg);
    const vy = v* Math.sin(angg);
    const time= (vy + Math.sqrt(vy*vy + 2*9.8*height))/9.8; 
    const distance = vx*time;
    const max_height = height + (vy*vy)/(2*9.8);
    // console.log(time);
    // console.log(distance);
    // console.log(max_height);

    document.querySelector('#max-height').value = max_height.toFixed(3);
    document.querySelector('#distance').value = distance.toFixed(3);
    document.querySelector('#time').value = time.toFixed(3);
})