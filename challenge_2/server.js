const express = require('express');
var path = require('path');
const app = express();

app.use(express.static('client'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',
(req, res) => {
    res.sendfile(path.join(__dirname + '/client/index.html'));
});

app.post('/submitjson',
(req, res) => {
    var input = JSON.parse(req.body.inputArea);
    console.log(processJson(input));
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

var processJson = function(input){
    var output = columnString(input) + objToCSV(input);

    // return output.substring(0, output.length-1);
    return output;
};

var columnString = function(obj) {
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
        if (keys[i] === 'children') {
            keys.splice(i, 1);
        }
    }

    return keys.join(',') + '\n';
};

var objToCSV = function(obj) {
    var items = [];
    var output = '';
    for (var item in obj) {
        if (item !== 'children') {
            items.push(obj[item]);
        }
    }

    output += items.join(',') + '\n';

    if (obj.children) {
        for (var i = 0; i < obj.children.length; i++) {
            output += objToCSV(obj.children[i]);
        }
    }

    return output;
};

module.exports = app;

