import React from 'react';
import logoDelate from "../../asset/eliminar.png"
import Styled from "./cartdetail.module.css"

const CartDetail = ({ data, delateItem }) => {
    const { id, name, price, picture, quantity, subtotal } = data
    return (
        <div className={Styled.container}>
            <div>
                <img className={Styled.img} src={picture}></img>
            </div>
            <div className={Styled.box}>
                <h3 className={Styled.name}>{name}</h3>
                <h4>Cantidad: {quantity}</h4>
                <h3>${price} x Unid</h3>
            </div>
            <div>
                <h4>Subtotal: ${subtotal}</h4>
            </div>
            <img onClick={() => delateItem(id)} className={Styled.logo} src={logoDelate}></img>
        </div>
    );
}
export default CartDetail;