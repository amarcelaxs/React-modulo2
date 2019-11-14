import {createGlobalStyle} from 'styled-components';
/*importando font awesome globalmente*/
import 'font-awesome/css/font-awesome.css';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;  
    outline:0;
  }
  body{
    background: #9b65e6 !important;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family:sans-serif;
  }
`;

export default GlobalStyle;