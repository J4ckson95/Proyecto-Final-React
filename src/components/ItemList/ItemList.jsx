import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ data }) => {
    return (
        <>{data && data.map((element, index) => <Item key={index} data={element}></Item>)}</>
    );
}
export default ItemList;