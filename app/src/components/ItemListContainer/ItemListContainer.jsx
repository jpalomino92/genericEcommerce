import {React,useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';



export default function ItemListContainer () {

    const [items,setItems] = useState([]);


    useEffect(() => {
        

        fetch('https://fakestoreapi.com/products?limit=15')
            .then(res=>res.json())
            .then(items=>setItems(items))

 
            
      },[]);
 
    return (
            <div id = 'ItemListContainer'>
                <ItemList items={items}  />
            </div>


    )
}
