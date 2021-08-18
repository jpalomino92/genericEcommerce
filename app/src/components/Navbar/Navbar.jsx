import React from 'react'
import {MenuItems} from './MenuItems'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

function Navbar() {
    return (

        <nav className="navBarItems">
        <a href="/"> 
            <h1 className="navBarLogo"><i className="fas fa-biohazard"></i> E-commerce</h1>
        </a>
        <div className="menuIcon">
            <i className='fas fa-times'></i>
        </div>
        
        <ul className= 'nav-menu'>
            {MenuItems.map((item, index )=> {
                let navBarResult;

                if (index == "2" ) {
                    navBarResult =  <li key={index}  className={item.cName} > <a className="dropdown-toggle" href="#" id="navLinks" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}</a>  <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a className="dropdown-item" href={`/`}> {item.Category1} </a> <a className="dropdown-item" href={`/`}> {item.Category2} </a> </div>  </li>
                } else {
                    navBarResult = <li key={index}><a className={item.cName} id="navLinks" href= {item.url}>{item.title}</a></li>
                }
            
                return(

                    <div>
                        {navBarResult}
                    </div>
                        
                )
            })}

            <CartWidget route= {`/`}/>


        </ul>
        
        
    </nav>
    )
}

export default Navbar





