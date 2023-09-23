import React, { Component } from 'react';
import CardPaciente from '../components/cardPaciente';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      pacientes: [],
    };
  }

  componentDidMount() {
    // Faz uma solicitação à API
    fetch('http://localhost:8000/paciente/') // Verifique a URL da sua API
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pacientes: data.pacientes }); // Atualiza o estado com os dados da API
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  render() {
    const { pacientes } = this.state;

    return (
      <div className="home">
        <h1>Lista de Pacientes</h1>
        {pacientes.map((paciente, index) => (
          <CardPaciente
            key={index}
            nome={paciente.Nome}
            idade={paciente.Data_nascimento}
          />
        ))}
      </div>
    );
  }
}

export default Home;