import React, { useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { updatStock, CreateOrder } from '../../services/getData';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import Styled from "./checkout.module.css"

const CheckOut = () => {
    const [orderId, setorderId] = useState();
    const { cart, cleanCart } = useContext(cartContext)
    const generateOrder = (user) => {
        let data = { user, product: cart }
        cleanCart()
        cart.forEach((element) => {
            if (element.stock > element.quantity) {
                let newStock = element.stock - element.quantity
                updatStock(element.id, newStock)
            } else (alert("No se encuentra esa cantidad disponible en el momento"))
        })
        CreateOrder(data).then((element) => setorderId(element)).catch((err) => console.log(err))
    }
    return (
        <>
            {orderId ? <h3 className={Styled.cod}>El codigo de su gestión es: {orderId}</h3> : <CheckOutForm generateOrder={generateOrder}></CheckOutForm>}
        </>
    );
}
export default CheckOut;