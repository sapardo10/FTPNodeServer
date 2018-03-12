/*jshint esversion: 6 */
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use('/files', express.static(__dirname + 'files'));

app.get('/', (req, res) => {
  res.redirect('/static/index.html');
});

app.get('/download', (req, res) => {
  res.download(__dirname + '/files/archivo30.txt');
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
