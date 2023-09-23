const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Paciente = new Schema({
  CPF: {
    type: String
  },
  Nome: {
    type: String
  },
  Data_nascimento: {
    type: Date
  },
  Email: {
    type: String
  },
  Telefone: {
    type: String
  },
  Zona: {
    type: String
  },
  Prioridade: {
    type: String
  },
  Status: {
    type: Number
  }
},{
    collection: 'Paciente'
});

// CPF
// "12345678901"
// Nome
// "João Silva"
// Data_nascimento
// "1980-05-15"
// Email
// "joao.silva@example.com"
// Telefone
// "(11) 9876-5432"
// Zona
// "Norte"
// Prioridade
// "Alta"
// Status
// 1

module.exports = mongoose.model('Paciente', Paciente);