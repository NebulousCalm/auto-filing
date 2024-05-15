const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.use('/static/', express.static("./static"));
app.use(express.urlencoded({ extended: true }));
app.engine('html', ejs.renderFile);


app.get('/', (req, res) =>{
  res.render('index.html');
});

app.listen(8080);