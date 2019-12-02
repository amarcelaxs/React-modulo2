import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';
import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import  CompareList from '../../components/CompareList';


export default class Main extends Component {
  //state quando as mudanças reflitas no render
  state = {
    //variaveis
    loading:false,
    repositoryError: false,
    RepositoryInput:'',
    repositories: [],
  };


  handleAddRepository =async (e) => {
    //retira o carregamento de pagina depois de um submit
    e.preventDefault();
    this.setState({loading:true});

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
    } finally{
      //sendo executado mesmo se deu sucesso ou não
        this.setState({loading:false});
    }

  };
  
  handleRemoveRepository = async (id) => {

    const { repositories } = this.state;



    const updatedRepositories = repositories.filter(repository => repository.id !== id);



    this.setState({ repositories: updatedRepositories });



    await localStorage.setItem('@GitCompare:repositories', JSON.stringify(updatedRepositories));

  };
  render(){
    const {

      repositories, repositoryInput, repositoryError, loading,

    } = this.state;
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
        //linha67 button if  com um icone de loading
        />
        
        <button type="submit"  >{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        
      </Form>
      <CompareList repositories={this.state.repositories}
       removeRepository={this.handleRemoveRepository} />
    </Container>
      );
  } 
}
