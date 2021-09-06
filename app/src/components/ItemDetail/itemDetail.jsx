import React ,{useState}from 'react'; 
import ButtonCounter from '../buttonCounter/buttonCounter';

import ButtonCart from '../buttonGoToCart/buttonGoToCart';
import './itemDetail.css'


export default function ItemDetail({OnlyItem}) {
    
    let extra = 0
    const  {image,title,description} = OnlyItem

    const [bought,setBought] = useState(false) 
    let stock = 8
    const initial = 1 


    const onAdd = (quantity) => {
        console.log(quantity)

    } 


    {bought ? (
        extra = (
            <a>
                <ButtonCart />
            
            </a>
        )

    ) : (
        extra = (
            <a>
            <ButtonCounter  onAdd={onAdd} stock = {stock} initial={initial}/>
            </a>
        )
    )
    }
  
    

    return (

        <div className="ItemGrid">
               <div className="imageContainer">
                    <img src={image} className="itemDetailImage"/>
                </div>

                <div className="descriptionContainer">
                    <div>
                        <h1 className="itemDetailTitle">
                                {title}
                        </h1>   
                        <p>                    
                            {description}
                        </p>                
                    </div>
                </div>

                <div className="buttonContainer">
                    {extra}
                </div>        
        </div>
    )
}



