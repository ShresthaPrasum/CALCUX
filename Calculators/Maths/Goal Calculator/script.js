const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const goal = parseFloat(document.querySelector('#goal').value);
    const progress = parseFloat(document.querySelector('#progress').value);

    let percent = progress/goal;
    let percent1 = percent * 100;
    console.log(percent1);

    const output = document.querySelector('.result');
    output.style.display = "flex";
    output.classList.remove('hide');
    output.innerHTML = `
        <h2> Your Progress: </h2>
        <h2>${percent1.toFixed(2)}%  </h3>
        
       

        <div id="progress-bar">
            <div id="progresss"></div>
        </div>
    `;
    if(percent1 > 100){
        document.querySelector('#progresss').style.width = "100%"
    }else{
    document.querySelector('#progresss').style.width = `${percent1}%`;
    }
})