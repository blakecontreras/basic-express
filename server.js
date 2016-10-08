var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

var port = process.env.PORT || 8000;

var counter = 0;

app.post('/counter', function(req, res) {
  var body = req.body;
  console.log(body);
  counter++;
  res.send(200, counter);
})

app.listen(port);
console.log('Listening on port ' + port);
