const includeradio = document.querySelector('#include');
includeradio.addEventListener('change', (e)=>{
    document.querySelector('#includee').style.display = "block";
    document.querySelector('#excludee').style.display = "none";

    amount = parseFloat(document.querySelector('#amount').value);
    vat = parseFloat(document.querySelector('#vat').value);

    if(!isNaN(amount) && !isNaN(vat)){
        price = amount + ((vat*amount)/100);
        pricee = amount;
        tax = (vat*amount)/100;

        document.querySelector('#include-price').value = price.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
    }
    document.querySelector('#amount').dispatchEvent(new Event('input'));
})
const excluderadio = document.querySelector('#exclude');
excluderadio.addEventListener('change', (e)=>{
    document.querySelector('#excludee').style.display = "block";
    document.querySelector('#includee').style.display = "none";

    amount = parseFloat(document.querySelector('#amount').value);
    vat = parseFloat(document.querySelector('#vat').value);

    if(!isNaN(amount) && !isNaN(vat)){
        price = amount;
        pricee = amount / (1 + (vat/100));
        tax = amount - pricee;

        document.querySelector('#include-price').value = price.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
    }
    document.querySelector('#amount').dispatchEvent(new Event('input'));
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
        if(document.querySelector('#include').checked){
            pricee = amount;
            tax = (vat*amount)/100;
            price = amount + tax;
        }else{
            price = amount;
            pricee = amount / (1 + (vat/100));
            tax = amount - pricee;
        }
        
        document.querySelector('#include-price').value = price.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
    }
})

document.querySelector('#vat').addEventListener('input', (e)=>{
    amount = parseFloat(document.querySelector('#amount').value);
    vat = parseFloat(document.querySelector('#vat').value);

    if(isNaN(amount) || isNaN(vat)){
        console.log("full details?");
        return;
    }else{
        if(document.querySelector('#include').checked){
            pricee = amount;
            tax = (vat*amount)/100;
            price = amount + tax;
        }else{
            price = amount;
            pricee = amount / (1 + (vat/100));
            tax = amount - pricee;
        }

        document.querySelector('#include-price').value = price.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
    }
})

document.querySelector('#include-price').addEventListener('input', ()=>{
    price = parseFloat(document.querySelector('#include-price').value);
    vat = parseFloat(document.querySelector('#vat').value);

    if(isNaN(vat) || isNaN(price)){
        console.log("waiting for all details...");
        return;
    }else{
        amount = price / (1 + (vat/100));
        tax = price - amount;
        pricee = amount;
        
        document.querySelector('#amount').value = amount.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
    }
})

document.querySelector('#tax-amount').addEventListener('input', ()=>{
    vat = parseFloat(document.querySelector('#vat').value);
    tax = parseFloat(document.querySelector('#tax-amount').value);

    if(isNaN(vat) || isNaN(tax)){
        console.log("all values?");
        return;
    }else{
        amount = tax / (vat/100);
        price = amount + tax;
        pricee = amount;

        document.querySelector('#amount').value = amount.toFixed(2);
        document.querySelector('#include-price').value = price.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
    }
})

document.querySelector('#exclude-price').addEventListener('input', ()=>{
    vat = parseFloat(document.querySelector('#vat').value);
    pricee = parseFloat(document.querySelector('#exclude-price').value);

    if(isNaN(vat) || isNaN(pricee)){
        console.log("waiting for full details!!");
    }else{
        amount = pricee;
        tax = (vat*amount)/100;
        price = amount + tax;

        if(document.querySelector('#exclude').checked){
            amount = pricee + ((vat*pricee)/100);
            tax = amount - pricee;
            price = amount;
        }

        document.querySelector('#amount').value = amount.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
        document.querySelector('#tax-amountt').value = tax.toFixed(2);
        document.querySelector('#include-price').value = price.toFixed(2);
    }
})

document.querySelector('#tax-amountt').addEventListener('input', ()=>{
    vat = parseFloat(document.querySelector('#vat').value);
    tax = parseFloat(document.querySelector('#tax-amountt').value);
    
    if(isNaN(vat) || isNaN(tax)){
        console.log("no full values?");
        return;
    }else{
        amount = tax/(vat/100);
        price = amount + tax;
        pricee = amount;

        document.querySelector('#amount').value = amount.toFixed(2);
        document.querySelector('#include-price').value = price.toFixed(2);
        document.querySelector('#exclude-price').value = pricee.toFixed(2);
        document.querySelector('#tax-amount').value = tax.toFixed(2);
    }
})