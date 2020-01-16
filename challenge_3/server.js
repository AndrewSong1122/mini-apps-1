const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/',
(req, res) => {
    res.sendfile(path.join(__dirname + '/public/index.html'));
});

app.post('/account',
(req, res) => {
    res.
});

module.exports = app;