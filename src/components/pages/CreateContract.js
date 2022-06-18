import React, {useState} from 'react'
import '../../App.css';
import './Login.css';
import {useHistory} from 'react-router-dom';
import logo from '../../images/logo-1.png';
//Falta aquí que quan registri el contracte el pushei a l'stack de l'APP

export default function CreateContract(props) {

    
    const history = useHistory();
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        fetch('http://localhost:4000/'+props.username+'/createAgreement/'+props.comId+'/'+cost+'/'+props.comId2, {
        method: 'POST',
        headers: { "Content-Type": "application/json"}
      }).then(response => response.json())
      .then(data => {

        const ledgerId = data.ledgerId;        
        const blog = { name, cost, ledgerId };
        fetch('http://127.0.0.1:8080/api/contracts/'+props.comId, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(response => response.json())
      .then(data2 => {
        props.passChildData((data3) => [
          ...data3,
          {
            id: data2.id,
            name: data2.name,
            ledgerId: data2.ledgerId,
            cost: data2.cost,
            most: data2.most,
            vote: data2.vote,
            nay: data2.nay,
            approved: data2.approved,
            userApproved: data2.userApproved
          },
        ]);
    });

      });

      history.push('/');
      
      }
    
      const handleClick = (e) => {
        e.preventDefault();
        history.push('/register');
      };

  return (
    <>
    {props.token === 'AUTH' ? history.push('/') : <div className='login'>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-group">
              <label htmlFor="cost">Cost</label>
              <input type="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
            </div>
            <button className="primary">Crear SmartContract</button>
          </form>
        </div>}
    </>
  )
}
