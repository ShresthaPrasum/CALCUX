const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const initial = parseInt(document.querySelector('#initial-value').value);
    const final = parseInt(document.querySelector('#final-value').value);
    let change;

    change = (final - initial) * 100;
    let change1 = change/Math.abs(initial);

    const result = document.querySelector('#result-box');
    result.style.display = "flex";
    result.innerHTML = `
    <h3> Result: </h3>
        <h2>${change1.toFixed(3)}%</h2>

    `;
})