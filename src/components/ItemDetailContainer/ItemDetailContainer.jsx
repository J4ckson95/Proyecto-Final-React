import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/getData';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [productsById, setProductsById] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then((element) => {
                setProductsById(element)
            })
            .catch((err) => console.log(err))
    }, [id]);

    return (<>{productsById && <ItemDetail {...productsById}></ItemDetail>}</>);
}
export default ItemDetailContainer;