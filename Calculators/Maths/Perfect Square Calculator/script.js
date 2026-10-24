const input = document.querySelector('#input');
input.addEventListener('input', (e)=>{
    e.preventDefault();
    const a = input.value;
    let sqrt = Math.sqrt(a);
    let near = Math.round(sqrt);
    let nearnumber = near * near;
    let perfect = Number.isInteger(sqrt);
    console.log(perfect);

    const output = document.querySelector('#output');
    if(perfect==false){
    output.innerHTML = `
        <label id="label">
           PERFECT SQUARE NUMBER 
        </label>
        <h3> ${a} is not a perfect square number and the closest perfect square number from yours is ${nearnumber}! </h3>
    `;
    }else{
        output.innerHTML = `
            <label id="label">
                PERFECT SQUARE!
            </label>
            <h3>
            ${a} is a perfect square number and its square root is ${sqrt}.
            </h3>
        `;
    }
})