const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const { traceDeprecation } = require('process');

app.use(express.static(__dirname));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/math', (req,res)=>{
    res.sendFile(path.join(__dirname, 'math.html'));
})
app.get('/math/goal-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'Goal Calculator', 'index.html'));
})
app.get('/math/lcm-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'LCM Calculator', 'index.html'));
})
app.get('/math/distance-converter',(req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'Distance Unit Converter', 'index.html'))
})
app.get('/math/percentage-change', (req,res)=>{
    res.sendFile(path.join(__dirname,'Calculators', 'Maths', 'Percentage Change Calculator', 'index.html'));
})
app.get('/math/perfect-square', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'Perfect Square Calculator', 'index.html'))
})
app.get('/math/probability-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'Probability Calculator', 'index.html'));
})

app.get('/physics', (req,res)=>{
    res.sendFile(path.join(__dirname,  'physic.html'));
})
app.get('/physics/accleration-calculator',(req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Physics', 'Accleration Calculator', 'index.html'));
})
app.get('/physics/freefall-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Physics', 'Free Fall Calculator', 'index.html'));
})
app.get('/physics/frequency-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Physics', 'Frequency Calculator', 'index.html'));
})
app.get('/physics/interplanetary-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Physics', 'Interplanetary Calculator', 'index.html'));
})
app.get('/physics/potential-energy', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Physics', 'Potential Energy Calculator', 'index.html'));
})
app.get('/physics/velocity-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Physics', 'Velocity Calculators', 'index.html'));
})
app.get('/physics/work-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Physics', 'Work Calculator', 'index.html'));
})
app.get('/physics/projectile-motion', (req,res)=>{
    res.sendFile((path.join(__dirname, 'Calculators', 'Physics', 'Projectile Motion Calculator', 'index.html')));
})


app.get('/finance', (req,res)=>{
    res.sendFile(path.join(__dirname, 'finance.html'));
})
app.get('/finance/compound-interest', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Finance', 'Compound Interest Calc', 'index.html'));
})
app.get('/finance/lifetime-earnings', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Finance', 'Lifetime Earnings Calc', 'index.html'));
})

app.get('/finance/vat-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Finance', 'VAT Calculator', 'index.html'));
})

app.get('/finance/emi-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Finance', 'Emi Calculator', 'index.html'));
})
app.get('/finance/discount-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Finance', 'Discount Calculator', 'index.html'));
})

app.get('/construction', (req,res)=>{
    res.sendFile(path.join(__dirname, 'construction.html'));
})
app.get('/construction/four-walls', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Construction', '4 Walls', 'index.html'));
})
app.get('/finance/fuel-cost', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Finance', 'Fuel Cost', 'index.html'));
})

app.get('/math/mass-converter', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'Mass Unit Converter', 'index.html'));
})


app.listen(port, ()=>{
    console.log("server running on http://localhost:5000");
})
// module.exports = app;