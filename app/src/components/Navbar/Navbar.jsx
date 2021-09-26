import React from 'react';
import './NavBar.css';
import {MenuItems} from './MenuItems';
import CartWidget from '../CartWidget/CartWidget';
import NavBarDropDown from '../NarVarDropDown/NavBarDropDown';


function NavBar() {


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

                        if (index === 2 ) {
                            navBarResult =  <li className={item.cName} > <a className="dropdown-toggle" href="/#" id="navLinks" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}</a> {nav} </li>
                        } else {
                            navBarResult = <li ><a className={item.cName} id="navLinks" href= {item.url}>{item.title}</a></li>
                        }
                    
                        return(

                            <div key = {index}>
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