import React,{useContext} from 'react' 
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'



 const  CartWidget = ({route}) => {
     const {itemsTotales} = useContext(CartContext)

    return (
        <div>
            <Link to={route} >
                <i className="fas fa-shopping-cart"></i>
                <div className="cart-items">
                    {itemsTotales}
                </div>
            </Link>
        </div>
    )
}

export default CartWidget
