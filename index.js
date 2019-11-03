const express = require('express');
const app = express();
const path = require('path');
const routes = require('./server/routes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.listen(8080);
console.log("App listening on PORT:8080");
