import React from 'react'; 
import ButtonCounter from '../buttonCounter/ButtonCounter';



function Item() {

    let stock = 8


    
    const onAdd = (quantity) => {

        console.log(quantity)

    } 

  
    

    return (

        <div >

           
           <ButtonCounter  onAdd={onAdd} stock={stock} />


                        
        </div>
    )
}

export default Item
