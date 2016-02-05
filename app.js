var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var imagesPath = path.join(__dirname, '/public/images');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/photo*', function (req, res) {
  fs.readdir(imagesPath, function (err, files) {
    res.sendFile(path.join(imagesPath, _.sample(_.filter(files, function (file) {
      return file.indexOf('.jpg') || file.indexOf('.jpeg');
    }))));
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
