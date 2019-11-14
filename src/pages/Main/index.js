import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';
import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import  CompareList from '../../components/CompareList';


export default class Main extends Component {
  //state quando as mudanças reflitas no render
  state = {
    repositoryError: false,
    RepositoryInput:'',
    repositories: [],
  };

  handleAddRepository =async (e) => {
    //retira o carregamento de pagina depois de um submit
    e.preventDefault();


    try {

      //criação do dois dias atras 

      //a iformação ja tem que chegar no handle formatada
      const {data: repository} = await  api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: '',
        repositories: [... this.state.repositories, repository],
        repositoryError:false,
       
      });
    }catch (err){
      //configurando o erro caso o repository não exista
      this.setState({repositoryError: true });
    }

  }
  render(){
    return(
      <Container>
      <img src={logo} alt="Github Compare" />
      <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
        <input 
        type="text" 
        placeholder="usuario/repositorio" 
        value={this.state.repositoryInput}
        //linha 49 form passando propriedade de error props with error
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
