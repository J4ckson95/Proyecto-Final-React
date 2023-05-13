import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Styled from "./itemdetail.module.css"
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../context/cartContext';

const ItemDetail = ({ id, name, price, description, picture, stock }) => {
    const { addItemCart, cart } = useContext(cartContext)
    const [quantityAdde, setQuantityAdde] = useState(0);
    const HandleAdd = (quantity) => {
        setQuantityAdde(quantity)
        const item = {
            id: id,
            name: name,
            price: price,
            picture: picture[0],
            quantity: quantity,
            subtotal: price * quantity,
            stock: stock
        }
        addItemCart(item)
    }
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
                {!quantityAdde > 0 ? <ItemCount onAdd={HandleAdd}></ItemCount> : <Link to={"/cart"}><button className={Styled.button_checkout}>Terminar Compra</button></Link>}
            </div>
        </div>
    );
}
export default ItemDetail;