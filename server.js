const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use(express.static(__dirname));

app.get('/math', (req,res)=>{
    res.sendFile(path.join(__dirname, 'math.html'));
})
app.get('/math/goal-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'Goal Calculator', 'index.html'));
})
app.get('/math/lcm-calculator', (req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'LCM Calculator', 'index.html'));
})
app.get('/math/conversion',(req,res)=>{
    res.sendFile(path.join(__dirname, 'Calculators', 'Maths', 'Metric, Imperial Unit Conversion', 'index.html'))
})

app.get('/physics', (req,res)=>{
    res.sendFile(path.join(__dirname, 'physic.html'));
})
app.get('/finance', (req,res)=>{
    res.sendFile(path.join(__dirname, 'finance.html'));
})

app.listen(port, ()=>{
    console.log("server running on http://localhost:5000");
})