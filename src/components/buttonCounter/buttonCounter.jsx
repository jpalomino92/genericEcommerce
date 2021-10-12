import {React,useState } from 'react';
import { Button ,Icon} from 'semantic-ui-react';
import './buttonCounter.css'




const  ButtonCounter = ({onAdd,stock,initial}) => {

  const [quantity,setQuantity] = useState(initial);

  const handleIncrement = function(){
      if (quantity > parseInt(stock)) {
          console.log('no hay stock suficiente')    
      } else {
          setQuantity(quantity + 1);
      }

    
  };

  const handleDecrement = function(){

    if (parseInt(quantity) > 0) {
      setQuantity(quantity - 1);      
    }
    
  };


  return(
    <div className="ButtonCounter">

        <Button animated='vertical' onClick={ ()=> onAdd(quantity) }>
          <Button.Content hidden >Buy</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
          </Button.Content>
        </Button>

      <Button.Group>
        <Button positive onClick={handleDecrement}>-</Button>
        <Button.Or text={quantity} />
        <Button onClick={handleIncrement}>+</Button>        
      </Button.Group>

    </div>
  )
}
export default ButtonCounter





