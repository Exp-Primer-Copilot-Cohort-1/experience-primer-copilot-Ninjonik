// Create web server
// 1. npm install express
// 2. npm install body-parser
// 3. node comments.js
// 4. open browser and go to http://localhost:3000/
// 5. enter a comment and press submit
// 6. open browser and go to http://localhost:3000/comments
// 7. see your comment

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var comments = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/comments', function (req, res) {
    comments.push(req.body.comment);
    res.redirect('/');
});

app.get('/comments', function (req, res) {
    res.json(comments);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});