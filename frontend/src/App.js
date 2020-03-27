//Importando o React
import React from 'react';

//Importando as Rotas
import Routers from './routes'

//Importando Global.css
import './global.css'

//Importando o Logon
import Logon from './pages/Logon';

function App() {
  return (
    <Routers />
  );
}

export default App;

/*
* O useState retorna um Array de duas posições 
* [valor da variável, valor que deve ser modificado]
*/