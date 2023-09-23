const express = require('express');
const app = express();
const pacienteRoutes = express.Router();
const Paciente = require('../model/Paciente');



// api to get cars
pacienteRoutes.route('/').get(function (req, res) {
  Paciente.find(function (err, pacientes){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','pacientes': pacientes});
    }
  });
});

pacienteRoutes.route('/paciente/:Nome').get(function (req, res) {
  let Nome = req.params.Nome;
  
  Paciente.find({ Nome: Nome }, function(err, cars) {
    if (err) {
     
      res.status(500).send('Erro interno do servidor');
    } else if (cars.length === 0) {
      
      res.status(404).send('Nenhum Paciente encontrado');
    } else {
     
      res.status(200).json(cars);
    }
  });
});

// api to get paciente
pacienteRoutes.route('/paciente/:id').get(function (req, res) {
  let ID = req.params.id;
  Paciente.findById(ID, function (err, paciente){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','paciente': paciente});
    }
  });
});

// api to update route
pacienteRoutes.route('/update/:id').put(function (req, res) {
    Paciente.findById(req.params.id, function(err, paciente) {
    if (!paciente){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        paciente.fabricante = req.body.fabricante;
        paciente.email = req.body.email;
        paciente.phone_number = req.body.phone_number;

        paciente.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});



module.exports = pacienteRoutes;