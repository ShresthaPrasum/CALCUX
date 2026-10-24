const form = document.querySelector('form');
const amountt = document.querySelector('#amountt');
let output = document.querySelector('#outputt');
let amount;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    amountt.style.display = "none";
    const formdata = new FormData(form);
    let principle = parseFloat(document.querySelector('#principle').value);
    let rate = parseFloat(document.querySelector('#rate').value);
    rate = rate/100;
    let time = parseInt(document.querySelector('#months').value);
    let years = time/12;
    let frequency = parseInt(formdata.get('frequency'));
    console.log(frequency);

    let a = 1 + (rate/frequency);
    let b = frequency * years;
    let c = a ** b;
    amount = parseFloat(principle * c);
    let compound = parseFloat(amount - principle);

    output.innerHTML = `
    <div id="outputt">
         <div id="amountt">
            Compound Interest: ${compound.toFixed(2)}$
         </div>
    </div>
    `;
    document.querySelector('#amountt').style.display = "flex";

})
amountt.addEventListener('click', (e)=>{
    e.preventDefault();
    output.innerHTML = `
        Total Amount: ${amount.toFixed(2)}$
    `;
    amountt.style.display = "none";
})