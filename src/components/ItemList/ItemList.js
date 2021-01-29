import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ todoItem }) => (<ul>
    <li>< Item todoItem={todoItem} /></li>
    <li>< Item todoItem={'Прописать props'} /></li>
    <li>< Item todoItem={'Сдать задание на проверку'} /></li>
</ul>);

export default ItemList;