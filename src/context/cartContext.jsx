import React, { useState } from 'react';

export const cartContext = React.createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addItemCart = (item) => {
        if (!isInCart(item)) {
            setCart([...cart, item])
        } else {
            alert("Producto ya ingresado dentro del carrito de compars :D")
        }
    }
    const isInCart = (item) => {
        let newcart = cart.some((element) => element.id === item.id)
        return newcart
    }
    const delateItem = (id) => {
        const newCart = cart.filter((element) => element.id !== id)
        setCart(newCart)
    }
    const cleanCart = () => {
        setCart([])
    }
    return (
        <cartContext.Provider value={{ cart, setCart, addItemCart, delateItem, cleanCart }}>
            {children}
        </cartContext.Provider>
    )
}