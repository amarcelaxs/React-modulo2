import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:50px;


`;

export const Repository = styled.div`
  width:250px;
  background:#fff;
  border-radius:3px;
  margin:0 10px;
  display:flex;
  flex-direction:column;
  

  header{
    padding:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
    width:64px;
    }

    strong{
      font-size:24px;
      margin-top:10px;
    }

    small{
      font-size:14px;
      color:#6666;
    }

  }

  ul{
    padding:0;
    list-style:none;
    li{
      font-weight:bold;
      padding: 12px 20px;
      small{
        font-weight:normal;
        font-size:12px;
        color:#999;
        font-style:italic;
      }
      &:nth-child(2n - 1){
        background:#f5f5f5;
      }
    }
  }
  .buttons-container button{
    width: 50%;
    margin: 0 25% 10%;
    background: #52d89f;
    border: 0;
    border-radius: 5px;
    color: #eee;
    padding: 5%;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    outline:none;  
    &:hover{
      background:#46b988;
    } 
  }

`
