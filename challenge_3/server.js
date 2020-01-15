const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/',
(req, res) => {
    res.sendfile(path.join(__dirname + '/public/index.html'));
});

module.exports = app;