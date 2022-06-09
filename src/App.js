import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import EditUser from './components/pages/EditUser';
import Comunidades from './components/pages/Comunidades';
import Contratos from './components/pages/Contratos';
import Register from './components/pages/Register';
import CreateCommunity from './components/pages/CreateCommunity';

function App() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    id: 0,
    token: "AUTH"
  });

  const [arrayCommunities, setCommunities] = useState([
    {
      id: "",
      name: "",
      wallet: 0
    }
  ]);

  return ( 
    <BrowserRouter>
      <Navbar {...user}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/comunidades' component={() => <Comunidades token={user.token} arr={arrayCommunities} />} />
        <Route path='/contratos' component={() => <Contratos {...user} />} />
        <Route path='/login' component={() => <Login {...user} {...arrayCommunities} passChildData={setUser} passChildData2={setCommunities} />} />
        <Route path='/edituser' component={() => <EditUser {...user} passChildData={setUser} />} />
        <Route path='/register' component={() => <Register {...user} passChildData={setUser} />} />
        <Route path='/createcommunity' component={() => <CreateCommunity {...user} passChildData2={setCommunities} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
