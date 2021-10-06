import {React,useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
import getFirestore from '../../dbFirebase/getFirebase'


export const ItemDetailContainer = ({id}) => {

    const [OnlyItem,setOnlyItem] = useState([])


    const getItems = (id) => {
        const db = getFirestore();
        const productsCollection = db.collection("products");
    
        
        const item = productsCollection.doc(id);
        return item.get();
    
      };
    
      useEffect(() => {

        getItems(id).then((resultado) => {
          if (resultado.exists) {
            setOnlyItem({ id: resultado.id, ...resultado.data() });
          }
        });
        return;
      }, [id]);



    return (
        <div>

            <ItemDetail OnlyItem={OnlyItem}/>

            
            
        
        </div>
    )
}

export default ItemDetailContainer 


