import React,{useContext} from 'react'; 
import { CartContext } from '../../context/cartContext';
import { Button, Card, CardGroup, Image } from 'semantic-ui-react'



export default function Cart() {

    const {cart,addItem,removeItem} = useContext(CartContext)

    let cartRender = 0

    {cart ? (
        cartRender = (
            <div>
                {cart.map((item,index) => {
                    
                    return(
                        <div  key = {index}>
                            <CardGroup>
                                <Card>
                                    <Card.Content>
                                        <Image
                                        floated='right'
                                        size='mini'
                                        src={item.item.image}
                                        />
                                        <Card.Header>{item.item.title}</Card.Header>
                                        <Card.Description><strong> Cantidad: {item.quantity} </strong></Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                        <Button basic color='green' onClick = { ()=> addItem(item.item,1)}>
                                            Agregar
                                        </Button>
                                        <Button basic color='red' onClick= { () =>{ removeItem(item.item.id) } } >
                                            Eliminar
                                        </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </CardGroup>
                        </div>
                        
                    )
                })}
            </div>
        )
    ):(
        cartRender = (
            <div>
                <h1>vacio</h1>
            </div>
        )
    )}

    return (
        <div>

            {cartRender}
                

        </div>
    )
}



