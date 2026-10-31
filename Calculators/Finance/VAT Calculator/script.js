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
let pricee;


document.querySelector('#amount').addEventListener('input', (e)=>{

    amount = parseFloat(document.querySelector('#amount').value);
    vat = parseFloat(document.querySelector('#vat').value);

    if(isNaN(amount) || isNaN(vat)){
        console.log("waiting for full details....");
        return;
    }else{


    price = amount + ((vat*amount)/100);
    pricee = amount - ((vat*amount)/100);
    tax = (vat*amount)/100;
    
    document.querySelector('#include-price').value = price.toFixed(2);
    document.querySelector('#tax-amount').value = tax.toFixed(2);
    document.querySelector('#tax-amountt').value = tax.toFixed(2);
    document.querySelector('#exclude-price').value = tax.toFixed(2);
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
    pricee = amount - ((vat*amount)/100);
    tax = (vat*amount)/100;

    document.querySelector('#include-price').value = price.toFixed(2);
    document.querySelector('#tax-amount').value = tax.toFixed(2);
    document.querySelector('#tax-amountt').value = tax.toFixed(2);
    document.querySelector('#exclude-price').value = pricee.toFixed(2);
    }
})
document.querySelector('#include-price').addEventListener('input', ()=>{
    amount = parseFloat(document.querySelector('#amount').value);
    vat = parseFloat(document.querySelector('#vat').value);
    tax = parseFloat(document.querySelector('#tax-amount').value);
    price = parseFloat(document.querySelector('#include-price').value);

    if(isNaN(amount) || isNaN(vat) || isNaN(tax) || isNaN(price)){
        console.log("waiting for all details...");
        return;
    }else{
        amount = price/(1 + (vat/100));
        tax = price - amount;
        pricee = amount- tax;
        document.querySelector('#amount').value = amount.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);

    }
})
document.querySelector('#tax-amount').addEventListener('input', ()=>{
    vat = parseFloat(document.querySelector('#vat').value);
    tax = parseFloat(document.querySelector('#tax-amount').value);
    price = parseFloat(document.querySelector('#include-price').value);

    if(isNaN(vat) || isNaN(tax)|| isNaN(price)){
        console.log("all values?");
        return;
    }else{
        amount = tax/ (vat/100);
        price = amount + tax;
        pricee = amount - tax;

        document.querySelector('#amount').value = amount.toFixed(2);
        document.querySelector('#include-price').value = price.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
    }
})