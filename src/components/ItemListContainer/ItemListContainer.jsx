import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from "../../services/getData.js"
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import Styled from "./itemlistcontainer.module.css"


const ItemListContainer = () => {
    const { category } = useParams()
    const [data, setData] = useState();

    const getData = category ? getProductsByCategory : getProducts

    useEffect(() => {
        getData(category)
            .then((element) => setData(element))
            .catch((err) => console.log(err))
    }, [category]);
    return (
        <div className={Styled.container}>
            <ItemList data={data}></ItemList>
        </div>
    );
}
export default ItemListContainer;