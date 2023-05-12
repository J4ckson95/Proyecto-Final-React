import React from 'react';
import Styled from "./item.module.css"
import { NavLink } from 'react-router-dom';

const Item = ({ data }) => {
    const { id, name, price, picture } = data
    return (
        <div className={Styled.container}>
            <NavLink style={{ textDecoration: "none" }} to={`/item/${id}`}>
                <img className={Styled.img} src={picture[0]}></img>
                <div>
                    <h3 className={Styled.name}>{name}</h3>
                    <h4 className={Styled.price}>${price}</h4>
                </div>
            </NavLink>
        </div>
    );
}
export default Item;