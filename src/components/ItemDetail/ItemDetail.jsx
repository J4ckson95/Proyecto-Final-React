import React from 'react';
import Styled from "./itemdetail.module.css"
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, price, description, picture }) => {
    return (
        <div className={Styled.container}>
            <div>
                <img className={Styled.img} src={picture[1]}></img>
            </div>
            <div className={Styled.datacontainer}>
                <h3 className={Styled.name}>{name}</h3>
                <h4 className={Styled.price}>${price}</h4>
                <h5>Descripción</h5>
                <p className={Styled.description}>{description}</p>
            </div>
            <div className={Styled.cart}>
                <ItemCount></ItemCount>
                <div className={Styled.button_container}>
                    <button className={Styled.button_cart}>Agregar al Carrito</button>
                    <button className={Styled.button_checkout}>Terminar Compra</button>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;