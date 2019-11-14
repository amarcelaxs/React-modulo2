import styled from 'styled-components';


export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:60px;
background: #9b65e6 !important;
height:1000px;
`;

export const Form = styled.form`
    margin-top:20px;
    width:100%;
    max-width:400px;
    display:flex;
    /*funcionamento responsivo*/
    input{
      flex:1;
      height:55px;
      padding:0 20px;
      background:#fff;

      /*recebendo uma função com o unico parametro criando um if  else e c olocando borda
      vermelha caso n tenha repositorio*/
      border:${props => (props.withError ?  '2px solid #f00' : 0)};
      font-size:18px;
      color:#444;
      border-radius:3px;
      
    }

    button{
        height:55px;
        padding: 0 20px;
        margin-left:10px;
        background:#63f5b8;
        color:#fff;
        border:0;
        font-size:20px;
        font-weight:bold;
        border-radius:3px;
        width:80px;
        cursor:pointer;
        &:hover{
          background:#52d89f;
        }
    }

`;