let mm = document.querySelector('#mm');
let cm = document.querySelector('#cm');
let m = document.querySelector('#m');
let km = document.querySelector('#km');
let inn = document.querySelector('#in');
let ft = document.querySelector('#ft');
let yd = document.querySelector('#yd');
let mi = document.querySelector('#mi');
let li = document.querySelector('#li');

mm.addEventListener('input', (e)=>{
    e.preventDefault();
    mm = mm.value;
    cm.value = mm/10;
    m.value = mm/100;
    km.value = mm/1000000;
    inn.value = mm/25.4;
    ft.value = mm/304.8;
    yd.value = mm/914.4;
    mi.value = mm/1609344;
    li.value = mm/(9.461 * (10 ** 18));
})