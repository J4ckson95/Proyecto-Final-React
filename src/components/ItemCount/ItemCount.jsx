import React, { useState } from 'react';
import Styled from "./itemcount.module.css"

const ItemCount = () => {
    const [quantity, setQuantity] = useState(0);
    const HandleAdd = () => {
        setQuantity(quantity + 1)
    }
    const HandleRedu = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <h4 className={Styled.quantity}>Cantidad:</h4>
            <div className={Styled.count}>
                <button onClick={HandleRedu} className={Styled.button}>-</button>
                <h4>{quantity}</h4>
                <button onClick={HandleAdd} className={Styled.button}>+</button>
            </div>
        </div>
    );
}
export default ItemCount;