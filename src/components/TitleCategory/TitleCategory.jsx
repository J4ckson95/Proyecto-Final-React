import React from 'react';
import { useParams } from 'react-router-dom';
import Styled from "./titlecategory.module.css"

const TitleCategory = () => {
    let { category } = useParams()
    return (
        <>
            <h2 className={Styled.title}>Funkos {category}</h2>
        </>
    );
}
export default TitleCategory;