var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, 'dist');
app.use(express.static(staticPath));

app.listen(process.env.PORT || 3002, function() {
  console.log('listening');
});

app.get('*', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});
