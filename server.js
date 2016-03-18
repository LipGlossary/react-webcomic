var path = require('path');
var express = require('express');
var proxy = require('proxy-middleware');

var app = express();
app.use('/api', proxy('http://localhost:8090'))

console.log('__dirname: ' + __dirname);
var staticPath = path.resolve(__dirname, 'dist');
app.use(express.static(staticPath));

app.listen(process.env.PORT || 3002, function() {
  console.log('listening');
});

app.get('*', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});
