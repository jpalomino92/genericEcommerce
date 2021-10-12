import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from "react-bootstrap/NavDropdown";



export default function NavBar () {

    return (
        <div className="navBarItems">
            
            <Link to ={"/"}>
                <h1 className="navBarLogo"><i className="fas fa-biohazard"></i> Generic E-commerce</h1>
            </Link>
                
            <div className="menuIcon">
                <i className='fas fa-times'></i>
            </div>
            
            <ul className= 'nav-menu'>

                <Link to ={'/'}>
                    <li className= 'navLinks' >
                        <p className="navLinks" id="navLinks" role="button" >
                            Home
                        </p>  
                    </li>
                </Link>

                <NavDropdown title="Categorias" id="basic-nav-dropdown" className=" navLinks">
         
                    <NavDropdown.Item as={Link} to="/category/ropa de hombre">Ropa de hombre</NavDropdown.Item>
                
                    <NavDropdown.Item as={Link} to={'/category/mochilas'}>Mochila</NavDropdown.Item>
                
                </NavDropdown>
                

                <CartWidget route= {`/Cart`}/>

            </ul>
        </div>
    );
     
}

  