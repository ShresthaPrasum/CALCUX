let mm = parseFloat(document.querySelector('#mm').value);
let cm = parseFloat(document.querySelector('#cm').value);
let km = parseFloat(document.querySelector('#km').value);
let inn = parseFloat(document.querySelector('#in').value);
let ft = parseFloat(document.querySelector('#ft').value);
let yd = parseFloat(document.querySelector('#yd').value);
let mi = parseFloat(document.querySelector('#mi').value);
let li = parseFloat(document.querySelector('#li').value);

document.querySelector('#mm').addEventListener('input', (e)=>{
    e.preventDefault();
    document.querySelector('#cm').value = 12;
})