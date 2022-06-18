import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo-1.png';

export default function Register(props) {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState();
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { username, name, password, email, dob };

    fetch('http://127.0.0.1:8080/api/users', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then((response) => {
          if (!response.ok) {
              alert('Los datos introducidos no son válidos');
              history.push('/register');
          }
          else {
                const blog2 = { username, password };
                fetch('http://127.0.0.1:8080/api/users/login', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(blog2)
                }).then((response) => response.text())
                .then((dog2) => {

                    props.passChildData(previousState => {
                        return { ...previousState, token: dog2 }
                    });
            
                    fetch('http://127.0.0.1:8080/api/users/username/'+username)
                        .then(response => response.json())
                        .then(data => {
                        props.passChildData(previousState => {
                            return { ...previousState, name: data.name, username: data.username, email: data.email, id: data.id}
                        });
                        });

                        fetch('http://localhost:4000/registerUser/'+username, {
                          method: 'POST',
                          headers: { "Content-Type": "application/json"}
                        });

                    history.push('/');
                });
          }  
      });
  }

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
              <label htmlFor="name">Name</label>
              <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="dob">DOB</label>
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="primary">REGISTRAR</button>
          </form>
        </div> : history.push('/')}
    </>
  )
}
