import React from 'react';
import { Link } from "react-router-dom"
import Styled from "./navbar.module.css"

const NavBar = () => {
    return (
        <nav className={Styled.nav}>
            <ul className={Styled.link_container}>
                <Link className={Styled.link}>Home</Link>
                <Link className={Styled.link}>Marvel</Link>
                <Link className={Styled.link}>DC</Link>
                <Link className={Styled.link}>Start Wars</Link>
            </ul>
        </nav>
    );
}
export default NavBar;