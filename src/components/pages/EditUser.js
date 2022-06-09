import React, {useState} from 'react';
import './Login.css';
import {useHistory} from 'react-router-dom';

export default function EditUser(props) {

  const history = useHistory();
  const [username, setUsername] = useState(props.username);
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [token, setToken] = useState(props.token);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { username, name, email, token };

    fetch('http://127.0.0.1:8080/api/users/changeuser', {
        method: 'PUT',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(response => {
        if (!response.ok) {
          alert('Los datos introducidos no son válidos');
          return 'ERROR';
        } else return response.json()
        }).then(dog => {

          if (dog === 'ERROR') history.push('/edituser');
          else {
            props.passChildData(previousState => {
              return { ...previousState, name: dog.name, username: dog.username, email: dog.email}
            });
            history.push('/');
          }        
        });
  }


  const handleClick = (e) => {
    e.preventDefault();
    
    fetch('http://127.0.0.1:8080/api/users/logout/'+props.username, {
        method: 'POST',
        headers: { "Content-Type": "application/json"}
      }).then((response) => response.text())
      .then((dog) => alert(dog));

      props.passChildData(previousState => {
        return { ...previousState, token: 'AUTH'}
      });

      history.push('/');
  };

  return (
    <>
      {props.token === 'AUTH' ? history.push('/') : <div className='login'>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className="primary">Guardar cambios</button>
          </form>
          <button className="secondary" onClick={handleClick}>
            LOGOUT
          </button>
        </div>}
      
    </>
  )
}
