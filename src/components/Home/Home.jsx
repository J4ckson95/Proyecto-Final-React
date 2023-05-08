import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Styled from "./home.module.css"

const Home = () => {
    return (
        <div>
            <div className={Styled.container}><h2 className={Styled.title}>Novedades para ti</h2></div>
            <ItemListContainer></ItemListContainer>
        </div>
    );
}
export default Home;