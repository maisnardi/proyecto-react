import React from 'react'
import './itemlist.css'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((producto) => {
                return <Item producto={producto} key={producto.id}/>;
            })}
        </div>
    );
};

export default ItemList;