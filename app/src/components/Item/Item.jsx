import React ,{useState,useContext}from 'react'; 
import {Card} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/ButtonCounter';



function Item({item}) {

    const  {image,title,category,id} = item
    let stock = 8
    const initial = 1 

    const onAdd = (quantity) => {
        console.log(quantity)
    } 

  
    

    return (

        <div >
       
                <Card
                    
                    image= {image}
                    header={title}
                    meta= {category}
                />
           
           
           <ButtonCounter  onAdd={onAdd} stock = {stock} initial={initial}/>


                        
        </div>
    )
}

export default Item

