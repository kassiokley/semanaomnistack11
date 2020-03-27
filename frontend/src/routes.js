//Importando o Reace
import React from 'react';

//Importando "Componentes" do React-Router-Dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importando a Pagina do Logon
import Logon from './pages/Logon'

//Importando a Pagina Register
import Register from './pages/Register'

//Importando a Pagina Profile
import Profile from './pages/Profile'

//Importando a Pagina NewIncident
import NewIncident from './pages/NewIncident'

//Exportando a Rota
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}