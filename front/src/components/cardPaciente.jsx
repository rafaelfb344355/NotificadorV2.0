import React from 'react';
import './css/CardPaciente.css';

const CardPaciente = ({ nome, idade }) => {
  return (
    
    <div className="card-paciente">
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade} anos</p>
    </div>
 
  );
}

export default CardPaciente;