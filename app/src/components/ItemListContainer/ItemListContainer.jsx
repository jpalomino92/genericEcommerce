
import React from 'react'
import ItemList from '../ItemList/ItemList'
import ButtonCounter from '../buttonCounter/ButtonCounter'

function ItemListContainer() {


    let stock = 15
    const initial = 1 


    
    const onAdd = (quantity) => {

        console.log(quantity)

    } 


    
    return (
        <div>

 
            <ButtonCounter onAdd={onAdd} stock = {stock} initial = {initial}/>

            
        </div>
    )
}

export default ItemListContainer



