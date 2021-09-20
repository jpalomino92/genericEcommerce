import React, { createContext, useState,useEffect } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {




    const [cart,setCart] = useState([]);


    function addItem(item, quantity){

        const index = cart.findIndex(i => i.item.id === item.id)//

        if (index > -1) {
            const oldQy = cart[index].quantity

            cart.splice(index, 1)
            setCart([...cart, { item, quantity: quantity + oldQy}])
            console.log('existe')
        } else {
            setCart([...cart, {item, quantity}])
            console.log('no existe')
        }
    }
    console.log(cart)

      

    const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

    const clearCart = () => setCart([]);



    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

