var express = require('express');

var app = express();

app.use(express.static('client'));
app.listen(3010, function() {
  console.log('Polymer Play listening on port 3010!');
});