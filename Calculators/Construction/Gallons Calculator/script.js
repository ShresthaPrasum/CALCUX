document.querySelector('#area').addEventListener('input', ()=>{
    let area = parseFloat(document.querySelector('#area').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!area || !height){
        console.log("waiting for full details");
        return;
    }

    let volume = area * height;
    let gal = volume * 7.48052;
    let perfeet = gal/area;
    let pergallon = 1/perfeet;

    document.querySelector('#vol-gal').value = gal.toFixed(3);
    document.querySelector('#gal-sq').value = perfeet.toFixed(3);
    document.querySelector('#ft-gal').value = pergallon.toFixed(3);
})
document.querySelector('#height').addEventListener('input', ()=>{
    let area = parseFloat(document.querySelector('#area').value);
    let height = parseFloat(document.querySelector('#height').value);

    if(!area || !height){
        console.log("waiting for full details");
        return;
    }
    let volume = area * height;
    let gal = volume * 7.48052;
    let perfeet= gal/area;
    let pergallon = 1/perfeet;

    document.querySelector('#vol-gal').value = gal.toFixed(3);
    document.querySelector('#gal-sq').value =  perfeet.toFixed(3);
    document.querySelector('#ft-gal').value = pergallon.toFixed(3);
})