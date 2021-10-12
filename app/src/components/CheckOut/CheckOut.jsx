import React, {useState, useContext} from 'react';
import {Form,Grid,Button} from 'semantic-ui-react'
import getFirestore from '../../dbFirebase/getFirebase'
import { CartContext } from "../../context/cartContext";



function CheckOut() {
    const {cart,clearCart,precioTotal} = useContext(CartContext)

    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);    
    const [phone, setPhone] = useState(0);
    const [idOrder, setIdOrder] = useState(null); 

    const generateOrder =(e) =>{
        const buyer ={name,email,phone}
        const db = getFirestore()
        const ordersCollection = db.collection('orders')

        let order ={}
        order.buyer = {buyer}
        order.total = precioTotal
        order.items = cart.map((cartItem)=>{
            const id = cartItem.item.id
            const title = cartItem.item.title
            return{id,title}
        })

        ordersCollection.add(order)
        .then((IdDocument) =>{
            setIdOrder(IdDocument.id)
        })

        clearCart()



    }

    return (
        <Grid container>
            <Grid.Column>
                <Form onSubmit={generateOrder}>
                        <Form.Field>
                            <label>Nombre</label>
                            <input placeholder='First Name' type='text' onChange={(e)=> setName(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' type='email' onChange={(e)=> setEmail(e.target.value)}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Telefono</label>
                            <input placeholder='Phone' type='number' onChange={(e)=> setPhone(e.target.value)}/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                </Form>

                {idOrder ? `Su orden de compra es el ${idOrder}` : null}
                
            </Grid.Column>
        </Grid>
    )
}

export default CheckOut

