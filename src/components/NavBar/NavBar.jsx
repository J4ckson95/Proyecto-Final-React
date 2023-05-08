import React from 'react';
import { Link } from "react-router-dom"
import Styled from "./navbar.module.css"

const NavBar = () => {
    return (
        <nav className={Styled.nav}>
            <ul className={Styled.link_container}>
                <Link to={"/"} className={Styled.link}>Home</Link>
                <Link to={`/category/Marvel`} className={Styled.link}>Marvel</Link>
                <Link to={"/category/DC"} className={Styled.link}>DC</Link>
                <Link to={"/category/Star Wars"} className={Styled.link}>Star Wars</Link>
                <Link to={"/category/Anime"} className={Styled.link}>Anime</Link>
            </ul>
        </nav>
    );
}
export default NavBar;