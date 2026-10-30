const includeradio = document.querySelector('#include');
includeradio.addEventListener('change', (e)=>{
    e.preventDefault();
    document.querySelector('#includee').style.display = "block";
    document.querySelector('#excludee').style.display = "none";
})
const excluderadio = document.querySelector('#exclude');
excluderadio.addEventListener('change', (e)=>{
    e.preventDefault();
    document.querySelector('#excludee').style.display = "block";
    document.querySelector('#includee').style.display = "none";
})

let amount;
let vat;
let price;
let tax;

document.querySelector('#amount').addEventListener('input', (e)=>{

    amount = parseFloat(document.querySelector('#amount').value);
    vat = parseFloat(document.querySelector('#vat').value);

    if(isNaN(amount) || isNaN(vat)){
        console.log("waiting for full details....");
        return;
    }else{


    price = amount + ((vat*amount)/100);
    tax = (vat*amount)/100;
    
    document.querySelector('#include-price').value = price.toFixed(2);
    document.querySelector('#tax-amount').value = tax.toFixed(2);

    }
})
document.querySelector('#vat').addEventListener('input', (e)=>{
    amount = parseFloat(document.querySelector('#amount').value);
    vat = parseFloat(document.querySelector('#vat').value);

    if(isNaN(amount) || isNaN(vat)){
        console.log("full details?");
        return;
    }else{

    price = amount + ((vat*amount)/100);
    tax = (vat*amount)/100;

    document.querySelector('#include-price').value = price.toFixed(2);
    document.querySelector('#tax-amount').value = tax.toFixed(2);
    }
})