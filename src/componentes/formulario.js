import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { titulo: 'Teste' };
  }
  render() {
    return (

      <div>
        <h1>{this.state.titulo}</h1>
        
        <div>
          <label for="name">Nome Completo: </label>
          <input id="name" type="text"></input>

          <label for="cpf">Cpf: </label>
          <input id="cpf" type="text"></input>

          <label for="rg">Rg: </label>
          <input id="rg" type="text"></input>

          <label for="dtNascimento">Data de Nascimento: </label>  
          <input id="dtNascimento" type="text"></input>
          
          <label for="email">email: </label>
          <input id="email" type="email"></input>
        </div> 
        
      </div>

    )
  }
}

export default Formulario;