import React,{useContext} from 'react'; 
import { Link } from "react-router-dom";

import { CartContext } from '../../context/cartContext';
import { Button, Image,Grid ,Table} from 'semantic-ui-react'
import './cart.css'




 const  Cart = () => {

    const {cart,addItem,removeItem,clearCart,precioTotal,itemsTotales,restItem} = useContext(CartContext)

    let cartRender = 0

    if(cart.length){
        
        cartRender = (
            <>
            <Grid container >
                <Grid.Column>
                    <Table columns={6}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Producto</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell>Cantidad</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell>Precio</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>

                                </Table.Row>
                        </Table.Header>
                        {cart.map((item,index) => {
                            
                            return(
                                <Table.Body key={index}>
                                    <Table.Row>
                                        <Table.Cell>{item.item.title}</Table.Cell>
                                        <Table.Cell>
                                            <Image
                                                floated='right'
                                                size='mini'
                                                src={item.item.image}
                                                />
                                        </Table.Cell>
                                        <Table.Cell>{item.quantity}</Table.Cell>
                                        <Table.Cell>
                                            <div className='ui two buttons'>
                                                <Button basic color='green' onClick = { ()=> addItem(item.item,1)}>
                                                    Agregar
                                                </Button>
                                                
                                                <Button basic color='red' onClick= { () =>{ restItem(item.item) } } >
                                                    Restar
                                                </Button>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>{item.item.price}</Table.Cell>
                                        <Table.Cell>
                                            <Button basic color='red' onClick= { () =>{ removeItem(item.item.id) } } >
                                                        Eliminar
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>

                            )
                        })}

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>Total</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell>{itemsTotales} </Table.HeaderCell>

                                <Table.HeaderCell> </Table.HeaderCell>
                                <Table.HeaderCell> {precioTotal}</Table.HeaderCell>
                                <Table.HeaderCell> </Table.HeaderCell>

                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Grid.Column> 

            </Grid> 

            <Grid container  columns={3}>
                <Grid.Column>
                    <Button basic  color='red' onClick={()=>clearCart()}>
                        Vaciar Carrito
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Link to = '/'>
                        <Button basic color='green'>
                            Seguir comprando
                        </Button>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to ='/CheckOut'>
                        <Button basic color='black'>
                            Finalizar compra
                        </Button>
                    </Link>
                </Grid.Column>
            </Grid>
            
            </>
        )
    }else{
        cartRender = (
            <>
            <Grid container>
                <Grid.Column>
                    <h1>El Carrito se encuentra vacio</h1>
                    <Link to = '/'>
                        <Button basic color='green'>
                            Seguir comprando
                        </Button>
                    </Link>

                </Grid.Column>
            </Grid>
            </>
        )
    }

    
    return (
        <div className='cartGrid'>

                {cartRender}


        </div>
    )
}



export default Cart