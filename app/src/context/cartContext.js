import React, { createContext, useState,useEffect } from 'react'

export  const CartContext = createContext([])

export default function CartProvider({defaultValue = [],children}) {

    const [cart,setCart] = useState(defaultValue);

    const [itemsTotales, setItemsTotales] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);


    useEffect(() => {
        let precio = 0;
        let itemTot = 0;
        for (let cartItem of cart) {
          
          itemTot += cartItem.quantity;
          precio += cartItem.quantity * cartItem.item.price;
        }
        setItemsTotales(itemTot);
        setPrecioTotal(precio);
      }, [cart]);



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

    function restItem(item){

        const index = cart.findIndex(i => i.item.id === item.id)//

        const newQy = cart[index].quantity - 1


        cart.splice(index, 1)
        setCart([...cart, { item, quantity: newQy}])

        if (newQy === 0) {
            removeItem(item.id)
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
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,itemsTotales,precioTotal,restItem}}>
            {children}
        </CartContext.Provider>
    )
}



