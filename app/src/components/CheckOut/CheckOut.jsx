import React, {useState, useContext} from 'react';
import {Form,Grid,Button,Message} from 'semantic-ui-react'
import getFirestore from '../../dbFirebase/getFirebase'
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";






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
    let checkOutRender = 0

    if(idOrder){

        checkOutRender=(
            
            <Grid container >
                <Grid.Column>
                    <Message
                    success
                    header='Tu compra fue exitosa'
                    content= {`Tu Codigo de compra es ${idOrder}`}
                    />
                    <Link to = '/'>
                        <Button basic color='green'>
                            Seguir comprando
                        </Button>
                    </Link>
                </Grid.Column> 
            </Grid> 




        )

    }else{
        checkOutRender=(
            <Grid container>
            <Grid.Column>
                <Form onSubmit={generateOrder}>
                        <Form.Field>
                            <label>Nombre</label>
                            <input placeholder='First Name' type='text' onChange={(e)=> setName(e.target.value) } required/>
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' type='email' onChange={(e)=> setEmail(e.target.value)} required/>
                        </Form.Field>
                        <Form.Field>
                            <label>Telefono</label>
                            <input placeholder='Phone' type='number' onChange={(e)=> setPhone(e.target.value)} required/>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                </Form>
               
            </Grid.Column>
        </Grid>
        )
    }


    return (
        <>
            
            {checkOutRender}     

        </>
    )
}

export default CheckOut

