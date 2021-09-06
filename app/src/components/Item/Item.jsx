import React ,{useState}from 'react'; 
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/buttonCounter';



function Item({item}) {

    const  {image,title,category,id} = item
    let stock = 8
    const initial = 1 

    const onAdd = (quantity) => {
        console.log(quantity)
    } 

  
    

    return (

        <div >
       
            <Link to = {`/Products/${id}`} >
                <Card
                    
                    image= {image}
                    header={title}
                    meta= {category}
                />
            </Link>
           
           
           <ButtonCounter  onAdd={onAdd} stock = {stock} initial={initial}/>


                        
        </div>
    )
}

export default Item

