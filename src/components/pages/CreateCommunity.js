import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo-1.png';

export default function CreateCommunity(props) {

  const history = useHistory();
  const [name, setName] = useState('');
  const [wallet, setWallet] = useState(0);
  const [rol, setRol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const blog = { name, wallet };

    fetch('http://127.0.0.1:8080/api/communities', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
      })
            .then(response => response.json())
            .then(data => {
              fetch('http://127.0.0.1:8080/api/communities/'+data.id+'/'+props.id, {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(rol)
              })
              .then(response => response.json())
              .then(data2 => {
                props.passChildData2((data3) => [
                  ...data3,
                  {
                      id: data2.id,
                      name: data2.name,
                      wallet: data2.wallet,
                      rol: rol,
                      total: data2.total
                  },
                ]);
            });
            });

            history.push('/');
  }

  return (
    <>
     {props.token === 'AUTH' ? history.push('/login') : <div className='login'>
          <form className="form" onSubmit={handleSubmit}>
            <img src={logo} className="logo" alt="Business view - Reports" />
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="wallet">Wallet</label>
              <input type="wallet" value={wallet} onChange={(e) => setWallet(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="rol">Rol</label>
              <input type="rol" value={rol} onChange={(e) => setRol(e.target.value)} />
            </div>
            <button className="primary">CREAR COMUNIDAD</button>
          </form>
        </div>}
    </>
  )
}
