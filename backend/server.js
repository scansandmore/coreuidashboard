const { request, response } = require('express');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 8080;

//log request
app.use(morgan('tiny'));

//env variables calling path

dotenv.config({path: 'config.env'});

// Parse request to body parser

app.use(bodyparser.urlencoded({extended:true}));

app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get('/', (req,res) => {
    req.send(console.log("Crud backend"));
});
app.listen(PORT, ()=>{console.log('Server is running at 8080')});