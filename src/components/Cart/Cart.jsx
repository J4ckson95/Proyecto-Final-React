import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import CartDetail from '../CartDetail/CartDetail';
import Styled from "./cart.module.css"

const Cart = () => {
    const { cart, delateItem, cleanCart } = useContext(cartContext)
    console.log(typeof cart);
    const Total = cart.map((element) => element.subtotal).reduce((prev, acum) => acum + prev, 0)
    return (
        <div className={Styled.container}>
            {cart.map((element, index) => <CartDetail key={index} data={element} delateItem={delateItem}></CartDetail>)}
            {Total == 0 ? <h2 className={Styled.total}> No hay productos en tu carrito</h2> : <h2 className={Styled.total}>Total ${Total}</h2>}
            <button className={Styled.clean} onClick={cleanCart}>Limpiar Carro</button>
            <Link to={"/checkout"}><button className={Styled.button}>Realizar pedido</button></Link>
        </div>
    );
}
export default Cart;