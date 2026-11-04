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
    let val = mm.value;
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
    mi.value = val/160934.4;
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
    mi.value = val/1609.344;
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
inn.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = inn.value;
    mm.value = val * 25.4;
    cm.value = val * 2.54;
    m.value = val * 0.0254;
    km.value = val/39370.08;
    ft.value = val /12;
    yd.value = val/36;
    mi.value = val/63360;
    li.value = val / (3.725 * (10**17))
})
ft.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = ft.value;
    mm.value = val * 304.8;
    cm.value = val * 30.48;
    m.value = val * 0.3048;
    km.value = val/3280.84;
    inn.value = val * 12;
    yd.value = val /3;
    mi.value = val/5280;
    li.value = val / (3.104*(10**16));
})
yd.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = yd.value;
    mm.value = val * 914.4;
    cm.value = val * 91.44;
    m.value = val * 0.9144;
    km.value = val/1093.61;
    inn.value = val * 36;
    ft.value = val * 3;
    mi.value = val/1760;
    li.value = val /(1.036 * (10**16));
})
mi.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = mi.value;
    mm.value = val * 1609344;
    cm.value = val * 160934.4;
    m.value = val * 1609.344;
    km.value = val* 1.609344;
    inn.value = val*63360;
    ft.value = val*5280;
    yd.value = val * 1760;
    li.value = val/(5.879 * (10**12));
})
li.addEventListener('input', (e)=>{
    e.preventDefault();
    let val = li.value;
    mm.value = val * 9.461 * (10**18);
    cm.value = val * 9.461 * (10**17);
    m.value = val * 9.461 * (10**15);
    km.value = val* 9.461 * (10**12);
    inn.value = val * 3.725 * (10**17);
    ft.value =  val * 3.104 * (10**16);
    yd.value = val*1.036*(10**16);
    mi.value = val* 5.879 * (10**12);
})
