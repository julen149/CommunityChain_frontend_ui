import React, {useState} from 'react';
import '../../App.css';
import './Login.css';
import {useHistory} from 'react-router-dom';
import logo from '../../images/logo-1.png';

export default function Login(props) {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { username, password };

    fetch('http://127.0.0.1:8080/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then((response) => response.text())
      .then((dog) => {
        if (dog === 'LoginError') {
          alert('¡Datos de usuario incorrectos!');
        } else if (dog === 'Wrong password'){
          alert('¡Datos de usuario incorrectos!');
        } else {
          props.passChildData(previousState => {
            return { ...previousState, token: dog }
          });

          fetch('http://127.0.0.1:8080/api/users/username/'+username)
            .then(response => response.json())
            .then(data => {
              fetch('http://127.0.0.1:8080/api/users/communities/'+data.id)
              .then(response => response.json())
              .then(data2 => {
                props.passChildData2((data3) => [

                  ...data2.map(({id, name, wallet}) => ({
                    id,
                    name,
                    wallet
                  })),
                ]);
            });

            props.passChildData(previousState => {
              return { ...previousState, name: data.name, username: data.username, email: data.email, id: data.id}
            });

            });

          history.push('/');
        }
      });
  }

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/register');
  };

  return (
      <>
        {props.token === 'AUTH' ? <div className='login'>
          <form className="form" onSubmit={handleSubmit}>
            <img src={logo} className="logo" alt="Business view - Reports" />
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="primary">ENTRAR</button>
          </form>
          <button className="secondary" onClick={handleClick}>
            Crear cuenta nueva
          </button>
        </div> : history.push('/')}
        
      </>
    )
}