document.querySelector('#volume-ml').addEventListener('input', ()=>{
    let ml = parseFloat(document.querySelector('#volume-ml').value);
    
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