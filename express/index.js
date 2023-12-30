const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query.name);
    res.send(`Welcome ${req.query.name} to home page. Your age is ${req.query.age}`);
});
app.get('/about', (req, res) => {
    res.send('Welcome to about page');
});
app.get('/contact', (req, res) => {
    res.send('Welcome to Contact page');
});

app.listen(5000);
