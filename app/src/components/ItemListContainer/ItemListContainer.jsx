import {React,useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../itemList/itemList';



export const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    const {categoryName} = useParams()




    useEffect(() => {
        
        if (typeof categoryName != "undefined") {
            fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res=>res.json())
            .then(items=>setItems(items))       
        
        } else {
            fetch('https://fakestoreapi.com/products?limit=15')
                .then(res=>res.json())
                .then(items=>setItems(items))
        }
            
      },[]);
 
    return (
            <div id = 'ItemListContainer'>
                <ItemList items={items}  />
            </div>


    )
}