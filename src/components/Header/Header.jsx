import React from 'react';
import NavBar from '../NavBar/NavBar';
import CartUser from '../CartUser/CartUser';
import Styled from "./header.module.css"

const Header = () => {
    return (
        <div className={Styled.container}>
            <div className={Styled.headerContainer}>
                <img className={Styled.img} src='https://cdn.shopify.com/s/files/1/0447/5168/3749/files/Toysmart_LOGO_500x500_copia_1342c413-c870-4b24-aac2-fe8f97c18541_170x@2x.png?v=1671807984'></img>
                <div >
                    <input className={Styled.inputsearch} type='text' placeholder='Busca algo divertidio hoy'></input>
                </div>
                <CartUser></CartUser>
            </div>
            <NavBar></NavBar>
        </div>
    );
}
export default Header;