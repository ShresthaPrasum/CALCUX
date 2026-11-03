const submit = document.querySelector('#submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let pa = parseFloat(document.querySelector('#pa').value);
    let pb = parseFloat(document.querySelector('#pb').value);
    let pc = parseFloat(document.querySelector('#pc').value);
    
    pa = pa/100;
    pb= pb/100;
    pc = pc/100;

    const all = pa * pb * pc *100;
    const none = ((1-pa) * (1-pb) * (1-pc))*100;
    const atleastone = 100 - none;
    const exactlyone = (pa * (1-pb)* (1-pc) + pb* (1-pa) * (1-pb) + pc * (1-pa) * (1-pb)) * 100;      //better than calcus lmao
    
    document.querySelector('#all').value = all.toFixed(2);
    document.querySelector('#atleastone').value = atleastone.toFixed(2);
    document.querySelector('#none').value = none.toFixed(2);
    document.querySelector('#exactly-one').value = exactlyone.toFixed(2);
})