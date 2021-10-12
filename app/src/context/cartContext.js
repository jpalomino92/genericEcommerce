import React, { createContext, useState } from 'react'

export  const CartContext = createContext([])

export default function CartProvider({defaultValue = [],children}) {

    const [cart,setCart] = useState(defaultValue);



    function addItem(item, quantity){

        const index = cart.findIndex(i => i.item.id === item.id)//

        if (index > -1) {
            const oldQy = cart[index].quantity

            cart.splice(index, 1)
            setCart([...cart, { item, quantity: quantity + oldQy}])
        } else {
            setCart([...cart, {item, quantity}])
        }
        
    }

      

    ///const removeItem = (id) => setCart(cart.filter(item => item.item.id !== id));

    const removeItem = (id) => {
        const filterCart = cart.filter(item => item.item.id !== id)
        setCart(filterCart)
        console.log('removeitem',id,filterCart)
    }

    const clearCart = () => setCart([]);



    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}



