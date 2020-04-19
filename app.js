const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const employeeList = require('./src/routes/employeeList')
const todoList = require('./src/routes/todoList')
const bodyParser = require('body-parser');


app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static(__dirname + '/src/public'));
app.use('/css',express.static(path.join(__dirname,'/node_modules/materialize-css/dist/css')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/materialize-css/dist/js')));
app.use('/js',express.static(path.join(__dirname,'/node_modules/jquery/dist')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(employeeList)
app.use(todoList)
// app.use('/', routes);

app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}...`)
});