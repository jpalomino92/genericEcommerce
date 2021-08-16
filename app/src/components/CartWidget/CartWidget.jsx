import React from 'react' 
import "./CartWidget.css"


export default function CartWidget({route}) {
    return (
        <div>
            <a href= {route}>
            <i className="fas fa-shopping-cart"></i>
            </a>
        </div>
    )
}
