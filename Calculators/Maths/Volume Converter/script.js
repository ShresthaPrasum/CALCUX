document.querySelector('#vol-ml').addEventListener('input', ()=>{
    let ml = parseFloat(document.querySelector('#vol-ml').value);
    
    let litres = ml/1000;
    let gal = ml/3785.41;
    let quarts = ml/946.35;
    let pints = ml/473.18;
    let cups = ml/236.58;
    let ounces = ml/29.57;
    let tablespoon = ml/14.79;
    let teaspoon = ml/4.93;

    // console.log(tablespoon);
    document.querySelector('#vol-l').value = litres;
    document.querySelector('#vol-gal').value = gal;
    document.querySelector('#vol-quarts').value = quarts.toFixed(6);
    document.querySelector('#vol-pints').value = pints;
    document.querySelector('#vol-cups').value = cups;
    document.querySelector('#vol-ounces').value = ounces;
    document.querySelector('#vol-table').value = tablespoon;
    document.querySelector('#vol-teaspoons').value = teaspoon;
})
document.querySelector('#vol-l').addEventListener('input', ()=>{
    let l = parseFloat(document.querySelector('vol-l').value);
    let ml = l*1000;
    let gal = l/3.785;
    let quarts = 1/0.946;
    let pints = l/0.473;
    let cups = l/0.236;
    let ounces = 1/0.029;
    let tablespoon = l/0.0147;
    let teaspoon = l/0.0049;

    document.querySelector('#vol-ml').value = ml;
    document.querySelector('#vol-gal').value= gal;
    document.querySelector('#vol-quarts').value = quarts;
    document.querySelector('#vol-pints').value = pints;
    document.querySelector('#vol-cups').value = cups;
    document.querySelector('#vol-ounces').value = ounces;
    document.querySelector('#vol-table').value = tablespoon;
    document.querySelector('#vol-teaspoons').value = teaspoon;
})
document.querySelector('#vol-gal').addEventListener('input', ()=>{
    let gal = parseFloat(document.querySelector('#vol-gal').value);
    
    let ml = gal * 3785.41;
    let l = gal * 3.78541;
    let quarts = gal * 4;
    let pints = gal * 8;
    let cups = gal * 16;
    let ounces = gal * 128;
    let tablespoon = gal * 256;
    let teaspoon = gal * 768;

    document.querySelector('#vol-ml').value = ml;
    document.querySelector('#vol-l').value = l;
    document.querySelector('#vol-quarts').value = quarts;
    document.querySelector('#vol-pints').value = pints;
    document.querySelector('#vol-cups').value = cups;
    document.querySelector('#vol-ounces').value = ounces;
    document.querySelector('#vol-table').value = tablespoon;
    document.querySelector('#vol-teaspoons').value = teaspoon;
})
document.querySelector('#vol-quarts').addEventListener('input', ()=>{
    let quarts = parseFloat(document.querySelector('#vol-quarts').value);

    let ml = quarts * 946.35;
    let l = quarts * 0.946;
    let gal = quarts/4;
    let pints = quarts * 2;
    let cups = quarts * 4;
    let ounces = quarts * 32;
    let tablespoon = quarts * 64;
    let teaspoon = quarts * 192;
    
    document.querySelector('#vol-ml').value = ml;
    document.querySelector('#vol-l').value = l;
    document.querySelector('#vol-gal').value = gal;
    document.querySelector('#vol-pints').value = pints;
    document.querySelector('#vol-cups').value = cups;
    document.querySelector('#vol-ounces').value = ounces;
    document.querySelector('#vol-table').value = tablespoon;
    document.querySelector('#vol-teaspoons').value = teaspoon;
})