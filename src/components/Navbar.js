import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'
import logo from '../images/logo-2.png';
import './Button.css';

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  }

  window.addEventListener('resize', showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} className="logo" alt="Business view - Reports" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={props.token === 'AUTH' ? '/login' : '/comunidades'} className='nav-links' onClick={closeMobileMenu}>
                            Communities
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={props.token === 'AUTH' ? '/login' : '/contratos'} className='nav-links' onClick={closeMobileMenu}>
                            Contracts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {props.token === 'AUTH' ? <Button buttonStyle='btn--outline' link='/login'>LOGIN</Button> : <Link to='/edituser' className='btn-mobile'>
                                                                                                <button
                                                                                                    className={`btn btn--primary btn--medium`}
                                                                                                >
                                                                                                    {props.username}
                                                                                                </button>
                                                                                                </Link>}
            </div>
        </nav>
    </>
  )
}

export default Navbar