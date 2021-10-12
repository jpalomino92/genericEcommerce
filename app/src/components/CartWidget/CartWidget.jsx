import React from 'react' 
import "./CartWidget.css"
import { Link } from 'react-router-dom'


 const  CartWidget = ({route}) => {
    return (
        <div>
            <Link to={route} >
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </div>
    )
}

export default CartWidget
