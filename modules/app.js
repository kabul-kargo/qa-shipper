const express = require('express')
var bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(12000, () => console.log('Started on port 12000'))

app.post('/post', function(req, res) {
    var username=req.body.username;
    var password=req.body.password;
    console.log("User name = "+username+", password is "+password);
    res.send({ post : 'success' });
});

app.get('/get', function(req, res) {
    res.send({ get : 'success' });
});

module.exports = app