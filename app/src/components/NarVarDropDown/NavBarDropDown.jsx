import {React,useState, useEffect } from 'react';
import getFirestore from '../../dbFirebase/getFirebase'



export default function NavBarDropDown() {

    const [categorys,setCategorys] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const categorysDB = []

        db.collection("products").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
            categorysDB.push(doc.data().category);
        });
        setCategorys(categorysDB)

    
});

        

        },[]);


    return (
        <div>
            {categorys.map((categorys,idx) =>{

                return(

                    <a key = {idx} className="dropdown-item" href={`/category/${categorys}`}>{categorys}</a> 
                    

                )

            })
        }
            
        </div>
    )
}

