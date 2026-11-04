document.querySelector('#length').addEventListener('input', ()=>{
    let length = parseFloat(document.querySelector('#length').value);
    let breadth = parseFloat(document.querySelector('#width').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!length || !width || !height){
        console.log("Waiting for FULL DETAILSS YK");
        return;
    }

    volume = length * breadth * height;
    document.querySelector('#volume').value = volume;
})

document.querySelector('#width').addEventListener('input', ()=>{
    let width = parseFloat(document.querySelector('#width').value);
    let length = parseFloat(document.querySelector('#length').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!length || !width || !height){
        console.log("WAITING FOR FULL DETAILSSS");
        return;
    }
    let volume = length * width * height;
    document.querySelector('#volume').value = volume;
})

document.querySelector('#height').addEventListener('input', ()=>{
    let length = parseFloat(document.querySelector('#length').value);
    let breadth = parseFloat(document.querySelector('#width').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!length || !breadth || !height){
        console.log("Waiting for FULL DETAILS YK");
        return;
    }

    let volume = length * breadth * height;
    document.querySelector('#volume').value = volume;
})

document.querySelector('#density').addEventListener('input', ()=>{
    let density = parseFloat(document.querySelector('#density').value);
    let volume = parseFloat(document.querySelector('#volume').value);

    if(!volume){
        alert("Please find the volume first");
        return;
    }
    let mass = density * volume;
    let weight = mass * 9.8;
    console.log(mass);
    console.log(weight);

    document.querySelector('#mass').value = mass;
    document.querySelector('#weight').value = weight;
})