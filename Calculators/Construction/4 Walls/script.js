document.querySelector('#length').addEventListener('input', ()=>{
    let length = parseFloat(document.querySelector('#length').value);
    let width = parseFloat(document.querySelector('#width').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!length || !width || !height){
        console.log("Waiting for full details");
        return;
    }

    let area_floor = length * width;
    document.querySelector('#area-floor').value = area_floor;

    let areaofwalls = 2 * height * (length+ width);
    document.querySelector('#area-fourwalls').value = areaofwalls;

    let areafloorceiling = (2* height* (length+width)) + (2*length*width);
    document.querySelector('#area-fourwalls-floor').value = areafloorceiling;

})
document.querySelector('#width').addEventListener('input', ()=>{
    let length = parseFloat(document.querySelector('#length').value);
    let width = parseFloat(document.querySelector('#width').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!length || !width || !height){
        console.log("Waiting for full details");
        return;
    }

    let area_floor = length * width;
    document.querySelector('#area-floor').value = area_floor;

    let areaofwalls = 2 * height * (length+width);
    document.querySelector('#area-fourwalls').value = areaofwalls;

    let areafloorceiling = (2* height* (length+width)) + (2*length*width);
    document.querySelector('#area-fourwalls-floor').value = areafloorceiling;

})
document.querySelector('#height').addEventListener('input', ()=>{
    let length = parseFloat(document.querySelector('#length').value);
    let width = parseFloat(document.querySelector('#width').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!length || !width || !height){
        console.log("Waiting for full details");
        return;
    }

    let area_floor = length * width;
    document.querySelector('#area-floor').value = area_floor;

    let areaofwalls = 2 * height * (length+width);
    document.querySelector('#area-fourwalls').value = areaofwalls;

    let areafloorceiling = (2* height* (length+width)) + (2*length*width);
    document.querySelector('#area-fourwalls-floor').value = areafloorceiling;

})