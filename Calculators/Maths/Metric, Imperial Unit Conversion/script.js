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
    val = mm.value;
    cm.value = val/10;
    m.value = val/1000;
    km.value = val/1000000;
    inn.value = val/25.4;
    ft.value = val/304.8;
    yd.value = val/914.4;
    mi.value = val/1609344;
    li.value = val/(9.461 * (10 ** 18));
})
cm.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = cm.value;
    mm.value = val * 10;
    m.value = val/100;
    km.value = val/100000;
    inn.value = val/2.54;
    ft.value = val/30.48;
    yd.value = val/91.44;
    mi.value = val/160933.4;
    li.value = val/(9.461 * (10 ** 17) );
})
m.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = m.value;
    mm.value = val * 1000;
    cm.value = val * 100;
    km.value  = val/1000;
    inn.value = val/0.0254;
    ft.value = val/0.3048;
    yd.value = val/0.9144;
    mi.value = val/1609.334;
    li.value = val/(9.461 * (10**15));
})
km.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = km.value;
    mm.value = val* 1000000;
    cm.value = val*100000;
    m.value = val * 1000;
    inn.value = val * 39370.08;
    ft.value = val * 3280.84;
    yd.value = val * 1093.61;
    mi.value = val/1.609334;
    li.value = val/(9.461 * (10**12));
})