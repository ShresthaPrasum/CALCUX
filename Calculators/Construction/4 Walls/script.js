document.querySelector('#length').addEventListener('input', ()=>{
    let length = parseFloat(document.querySelector('#length').value);
    let breadth = parseFloat(document.querySelector('#width').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!length || !breadth || !height){
        console.log("Waiting for full inputs");
        return;
    }

    let floor = length * breadth;
    document.querySelector('#area-floor').value = floor.toFixed(2);

    
})