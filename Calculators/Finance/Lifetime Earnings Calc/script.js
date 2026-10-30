const submitbtn = document.querySelector('#submit-btn');

let currentage;
let retirementage;
let workingyears;
let currentsalary;
let expectedincrease;
let lifetimeearnings;

submitbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    currentage = parseInt(document.querySelector('#current-age').value);
    retirementage = parseInt(document.querySelector('#retirement-age').value);
    workingyears = retirementage - currentage;
    document.querySelector('#working-years').value = workingyears;
    currentsalary = parseInt(document.querySelector('#current-salary').value);
    expectedincrease = (parseInt(document.querySelector('#expected-increase').value))/100;


    if(isNaN(currentage) || isNaN(retirementage) || isNaN(currentsalary) || isNaN(expectedincrease) || currentage < 0 || workingyears < 0){
        alert("You need to enter all the details PROPERLY except lifetime earnings and working years!!");
        return;
    }

    lifetimeearnings = (currentsalary*(((1+expectedincrease)**workingyears) - 1))/expectedincrease;
    document.querySelector('#lifetime-earnings').value = lifetimeearnings.toFixed(0);
})

document.querySelector('#current-age').addEventListener('input', (e)=>{
    e.preventDefault();
    currentage = parseInt(document.querySelector('#current-age').value);
    retirementage= parseInt(document.querySelector('#retirement-age').value);
    workingyears = retirementage - currentage;
    currentsalary = parseInt(document.querySelector('#current-salary').value);
    expectedincrease = (parseInt(document.querySelector('#expected-increase').value))/100;

    if(isNaN(currentage) || isNaN(retirementage) || isNaN(currentsalary) || isNaN(expectedincrease) || currentage < 0 || workingyears < 0){
        console.log("Not full details!");
    }else{
        lifetimeearnings = (currentsalary*(((1+expectedincrease)**workingyears) - 1))/expectedincrease;
        document.querySelector('#lifetime-earnings').value = lifetimeearnings.toFixed(0);
        console.log(lifetimeearnings);
    }
})
document.querySelector('#retirement-age').addEventListener('input', (e)=>{
    e.preventDefault();
    currentage = parseInt(document.querySelector('#current-age').value);
    retirementage = parseInt(document.querySelector('#retirement-age').value);
    workingyears = retirementage - currentage;
    currentsalary = parseInt(document.querySelector('#current-salary').value);
    expectedincrease = (parseInt(document.querySelector('#current-salary').value))/100;
    if(isNaN(currentage) || isNaN(retirementage) || isNaN(currentsalary) || isNaN(expectedincrease)){
        console.log("Not full details!");
    }else{
        lifetimeearnings = (currentsalary*(((1+expectedincrease)**workingyears)-1))/expectedincrease;
        document.querySelector('#lifetime-earnings').value = lifetimeearnings.toFixed(0);
        console.log(lifetimeearnings);
    }
})
document.querySelector('#working-years').addEventListener('click', (e)=>{
    e.preventDefault();
    currentage= parseInt(document.querySelector('#current-age').value);
    // retirementage = parseInt(document.querySelector('#'))
    workingyears = parseInt(document.querySelector('#working-years').value);
    retirementage = currentage + workingyears;
    document.querySelector('#retirement-age').value = retirementage;
    currentsalary = parseInt(document.querySelector('#current-salary').value);
    expectedincrease = (parseInt(document.querySelector('#expected-increase').value))/100;
    if(isNaN(currentage) || isNaN(retirementage) || isNaN(currentsalary) || isNaN(expectedincrease) || currentage < 0 || workingyears < 0){
        console.log("Not full details!");
    }else{
        lifetimeearnings = (currentsalary*(((1+expectedincrease)**workingyears) - 1))/expectedincrease;
        document.querySelector('#lifetime-earnings').value = lifetimeearnings.toFixed(0);
        console.log(lifetimeearnings);
    }
})
document.querySelector('#current-salary').addEventListener('input', (e)=>{
    e.preventDefault();
    currentage = parseInt(document.querySelector('#current-age').value);
    retirementage= parseInt(document.querySelector('#retirement-age').value);
    workingyears = retirementage - currentage;
    currentsalary = parseInt(document.querySelector('#current-salary').value);
    expectedincrease = (parseInt(document.querySelector('#expected-increase').value))/100;

    if(isNaN(currentage) || isNaN(retirementage) || isNaN(currentsalary) || isNaN(expectedincrease) || currentage < 0 || workingyears < 0){
        console.log("Not full details!");
    }else{
        lifetimeearnings = (currentsalary*(((1+expectedincrease)**workingyears) - 1))/expectedincrease;
        document.querySelector('#lifetime-earnings').value = lifetimeearnings.toFixed(0);
        console.log(lifetimeearnings);
    }
})
document.querySelector('#expected-increase').addEventListener('input', (e)=>{
    e.preventDefault();
    currentage = parseInt(document.querySelector('#current-age').value);
    retirementage= parseInt(document.querySelector('#retirement-age').value);
    workingyears = retirementage - currentage;
    currentsalary = parseInt(document.querySelector('#current-salary').value);
    expectedincrease = (parseInt(document.querySelector('#expected-increase').value))/100;

    if(isNaN(currentage) || isNaN(retirementage) || isNaN(currentsalary) || isNaN(expectedincrease) || currentage < 0 || workingyears < 0){
        console.log("Not full details!");
    }else{
        lifetimeearnings = (currentsalary*(((1+expectedincrease)**workingyears) - 1))/expectedincrease;
        document.querySelector('#lifetime-earnings').value = lifetimeearnings.toFixed(0);
        console.log(lifetimeearnings);
    }
})