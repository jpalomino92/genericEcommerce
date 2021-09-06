import {React,useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';


export const ItemDetailContainer = ({id}) => {

    const [OnlyItem,setOnlyItem] = useState([])
 

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(OnlyItem=>setOnlyItem(OnlyItem))
      },[]);

    


    return (
        <div>

            <ItemDetail OnlyItem={OnlyItem}/>

            
            
        
        </div>
    )
}

export default ItemDetailContainer 


