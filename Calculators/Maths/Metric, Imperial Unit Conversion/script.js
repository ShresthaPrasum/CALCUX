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
    m.value = mm/1000;
    km.value = mm/1000000;
    inn.value = mm/25.4;
    ft.value = mm/304.8;
    yd.value = mm/914.4;
    mi.value = mm/1609344;
    li.value = mm/(9.461 * (10 ** 18));
})
cm.addEventListener('input', (e)=>{
    e.preventDefault();
    cm = cm.value;
    mm.value = cm * 10;
    m.value = cm/100;
    km.value = cm/100000;
    inn.value = cm/2.54;
    ft.value = cm/30.48;
    yd.value = cm/91.44;
    mi.value = cm/160933.4;
    li.value = cm/(9.461 * (10 ** 17) );
})
m.addEventListener('input', (e)=>{
    e.preventDefault();
    m = m.value;
    mm.value = m * 1000;
    cm.value = m * 100;
    km.value  = m/1000;
    inn.value = m/0.0254;
    ft.value = m/0.3048;
    yd.value = m/0.9144;
    mi.value = m/1609.334;
    li.value = m/(9.461 * (10**15));
})
km.addEventListener('input', (e)=>{
    e.preventDefault();
    km = km.value;
    mm.value = km* 1000000;
    cm.value = km*100000;
    m.value = km * 1000;
    inn.value = km * 39370.08;
    ft.value = km * 3280.84;
    yd.value = km * 1093.61;
    mi.value = km/1.609334;
    li.value = (9.461 * (10**12));
})