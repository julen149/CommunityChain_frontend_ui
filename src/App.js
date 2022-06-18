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
import UnirCommunity from './components/pages/UnirComunity';
import CreateContract from './components/pages/CreateContract';

function App() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    id: 0,
    token: "AUTH"
  });

  const [idtocreate, setIdToCreate] = useState(0);
  const [totaltocreate, setTotalToCreate] = useState(0);

  const [arrayCommunities, setCommunities] = useState([
    {
      id: "0",
      name: "",
      wallet: 0,
      rol: "",
      total: 0
    }
  ]);

  const [arrayContracts, setContracts] = useState([
    {
      id: "0",
      name: "",
      ledgerId: "",
      cost: 0,
      most: 0,
      vote: 0,
      nay: 0,
      approved: false,
      userApproved: false
    }
  ]);

  return ( 
    <BrowserRouter>
      <Navbar {...user}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/comunidades' component={() => <Comunidades token={user.token} arr={arrayCommunities} passChildData={setIdToCreate} passChildData2={setTotalToCreate} />} />
        <Route path='/contratos' component={() => <Contratos {...user} arr={arrayContracts} passChildData2={setCommunities} passChildData3={setContracts} />} />
        <Route path='/login' component={() => <Login {...user} {...arrayCommunities} passChildData={setUser} passChildData2={setCommunities} passChildData3={setContracts} />} />
        <Route path='/edituser' component={() => <EditUser {...user} passChildData={setUser} passChildData2={setCommunities} passChildData3={setContracts} />} />
        <Route path='/register' component={() => <Register {...user} passChildData={setUser}  />} />
        <Route path='/createcontract' component={() => <CreateContract {...user} comId={idtocreate} comId2={totaltocreate} passChildData={setContracts} />} />
        <Route path='/createcommunity' component={() => <CreateCommunity {...user} passChildData2={setCommunities} />} />
        <Route path='/unircommunity' component={() => <UnirCommunity {...user} passChildData={setUser} passChildData2={setCommunities} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
