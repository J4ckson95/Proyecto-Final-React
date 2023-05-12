import React, { useRef } from 'react'
import Styled from "./checkoutform.module.css"

const CheckOutForm = ({ generateOrder }) => {

    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()

    const HandleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value
        }
        generateOrder(user)
    }
    return (
        <div className={Styled.container}>
            <form onSubmit={HandleSubmit}>
                <div className={Styled.box}>
                    <label>Nombre :</label>
                    <input ref={nameRef} type='text' name='nombre' pattern='[A-Za-z]*'></input>
                </div>
                <div className={Styled.box}>
                    <label>Numero de telefono :</label>
                    <input ref={phoneRef} type='tel' pattern='[0-9]*'></input>
                </div>
                <div className={Styled.box}>
                    <label>Correo electronico :</label>
                    <input ref={emailRef} type='email'></input>
                </div>
                <button className={Styled.button}>Realizar pedido</button>
            </form>
        </div>
    );
}
export default CheckOutForm;