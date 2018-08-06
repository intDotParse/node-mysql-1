const express = require('express');
const hbs = require('hbs');

const base_url= __dirname;

let app = express();
hbs.registerPartials(base_url + "/views/includes");
app.set('view engine', 'hbs');

app.use('/css',express.static(base_url+'/node_modules/bootstrap/dist/css'));
app.use(express.static(base_url + '/public'));

app.get('/register', (req, res) => {
    res.render('register.hbs', {
        baseurl:base_url,
        pageLabel: "Registration Page",
        currentYear: new Date().getFullYear()
    });
});

app.get('/login', (req, res) => {
    res.render('login.hbs', {
        baseurl:base_url,
        pageLabel: "Login Page",
        currentYear: new Date().getFullYear()
    });
});

app.get('/help', (req, res) => {
    res.render('help.hbs',{
        baseurl:base_url,
        pageLabel: "Login Page",
        currentYear: new Date().getFullYear()
    });
});

app.listen('3000', () => {
    console.log(`Server running @ port 3000`);
});