import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoCart from "../../asset/carrito-de-compras.png"
import logoUser from "../../asset/usuario.png"
import Styled from "./cartwidget.module.css"
import { cartContext } from '../../context/cartContext';

const CartWidget = () => {
    const { cart } = useContext(cartContext)
    return (
        <div className={Styled.container}>
            <Link><img className={Styled.logo} src={logoUser}></img></Link>
            <div className={Styled.cart}>
                {cart.length > 0 && <p className={Styled.quantity}>{cart.length}</p>}
                <Link to={"/cart"}><img className={Styled.logo} src={logoCart}></img></Link>
            </div>
        </div>
    );
}
export default CartWidget;