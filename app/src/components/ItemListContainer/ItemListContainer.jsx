import {React,useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getFirestore from '../../dbFirebase/getFirebase'
import './ItemListContainer.css';
import ItemList from '../itemList/itemList';



export const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    const {categoryName} = useParams()




    useEffect(() => {

        const db = getFirestore()
        const queryDB = db.collection('products')

        const conditionQuery = (categoryName ? 
            queryDB.where('category', '==', categoryName) 
        : 
            queryDB )

  
        conditionQuery.get()
        .then(data => {
            if(data.size === 0){
                console.log('no hay nada')
            }
            setItems( data.docs.map(item => ( {id: item.id, ...item.data()} ) ) )                
        })  

      },[categoryName]);

 
    return (
            <div id = 'ItemListContainer'>
                <ItemList items={items}  />
            </div>


    )
}