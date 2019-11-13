import React, { Component } from 'react';

import api from '../../services/api';
import logo from '../../assets/logo.png';




import { Container, Form } from './styles';

import  CompareList from '../../components/CompareList';


export default class Main extends Component {
  //state quando as mudanças reflitas no render
  state = {
    RepositoryInput:'',
    repositories: [],
  };

  handleAddRepository =async (e) => {
    //retira o carregamento de pagina depois de um submit
    e.preventDefault();


    try {
      const response = await  api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [... this.state.repositories, response.data],
      })
    }catch (err){
      console.log(err);
        
    }





  }
  render(){
    return(
      <Container>
      <img src={logo} alt="Github Compare" />
      <Form onSubmit={this.handleAddRepository}>
        <input 
        type="text" 
        placeholder="usuario/repositorio" 
        value={this.state.repositoryInput}
        //evento no js disparado toda vez que tem acao ao input
        onChange={e => this.setState({repositoryInput: e.target.value})}
        
        />
        <button type="submit"  >OK</button>
      </Form>
      <CompareList repositories={this.state.repositories} />
    </Container>
      );
  } 
}
