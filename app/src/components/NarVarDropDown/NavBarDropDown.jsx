import {React,useState, useEffect } from 'react';


export default function NavBarDropDown() {

    const [categorys,setCategorys] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categorys=>setCategorys(categorys))
        },[]);


    return (
        <div>
            {categorys.map((categorys,idx) =>{

                return(

                    <a className="dropdown-item" href={`/category/${categorys}`}>{categorys}</a> 
                    

                )

            })
        }
            
        </div>
    )
}

