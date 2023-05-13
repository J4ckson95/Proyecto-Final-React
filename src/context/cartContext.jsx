import React, { useState, useEffect } from 'react';

export const cartContext = React.createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const product = localStorage.getItem("cart")
            return product ? JSON.parse(product) : []
        }
        catch (err) { console.log(err); }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const addItemCart = (item) => {
        if (!isInCart(item)) {
            setCart([...cart, item])
        } else {
            alert("Producto ya ingresado dentro del carrito de compars :D")
            return
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