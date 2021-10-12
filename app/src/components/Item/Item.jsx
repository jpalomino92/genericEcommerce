import React from 'react'; 
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react';



const  Item = ({item}) => {

    const  {image,title,category,id} = item

   

    return (

        <div >
       
            <Link to = {`/Products/${id}`} >
                <Card
                    
                    image= {image}
                    header={title}
                    meta= {category}
                />
            </Link>
         
        </div>
    )
}

export default Item

