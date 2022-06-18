import React, {useState} from 'react';
import '../../App.css';
import './Login.css';
import {useHistory} from 'react-router-dom';

export default function UnirCommunity(props) {

  const history = useHistory();
  const [id, setID] = useState('');
  const [rol, setRol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8080/api/communities/'+id+'/'+props.id, {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(rol)
              })
              .then(response => {
                if (!response.ok) {
                  alert('Los datos introducidos no son válidos');
                  return 'ERROR';
                } else return response.json() 
              })
              .then(data2 => {

                if (data2 === 'ERROR') history.push('/unircommunity');
                else {
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
                } 
            });

            history.push('/');
  }

  return (
      <>
        {props.token === 'AUTH' ? history.push('/') : <div className='login'>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="id">Community ID</label>
              <input type="ID" value={id} onChange={(e) => setID(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="rol">Rol</label>
              <input type="rol" value={rol} onChange={(e) => setRol(e.target.value)} />
            </div>
            <button className="primary">UNIRSE</button>
          </form>
        </div>}
        
      </>
    )
}