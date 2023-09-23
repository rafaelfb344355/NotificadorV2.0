var express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/SaudeDB', { useNewUrlParser: true , useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const PacienteRoute = require('./routes/paciente.route');
const paciente = require('./model/Paciente');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/paciente',PacienteRoute);
app.get('/', PacienteRoute);
app.get("/paciente/:CPF",PacienteRoute);
app.get("/paciente/:Nome",PacienteRoute);


app.listen(8000,function(){
    console.log('Listening on port 8000!');
});