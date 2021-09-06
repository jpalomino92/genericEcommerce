import React,{useState, useEffect } from 'react';
import './NavBar.css';
import {MenuItems} from './MenuItems';
import CartWidget from '../CartWidget/CartWidget';
import NavBarDropDown from '../NarVarDropDown/NavBarDropDown';
import { Link } from '@material-ui/core';


function NavBar() {

    const [items,setItems] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=15')
            .then(res=>res.json())
            .then(items=>setItems(items))
        },[]);

    const nav = ( <div className="dropdown-menu" aria-labelledby="navbarDropdown"> 
        <NavBarDropDown />    
    </div>
    
    )



    return (
            <nav className="navBarItems">
                <a href="/"> 
                    <h1 className="navBarLogo"><i className="fas fa-biohazard"></i> Generic E-commerce</h1>
                </a>
                <div className="menuIcon">
                    <i className='fas fa-times'></i>
                </div>
                
                <ul className= 'nav-menu'>
                    {MenuItems.map((item,index)=> {
                        let navBarResult;

                        if (index == "2" ) {
                            navBarResult =  <li key={index}  className={item.cName} > <a className="dropdown-toggle" href="#" id="navLinks" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}</a> {nav} </li>
                        } else {
                            navBarResult = <li key={index}><a className={item.cName} id="navLinks" href= {item.url}>{item.title}</a></li>
                        }
                    
                        return(

                            <div>
                                {navBarResult}
                            </div>
                                
                        )
                    })}
                    
                    <CartWidget route= {`/Cart`}/>

                </ul>
                
                
            </nav>
    )
     
}

export default NavBar 