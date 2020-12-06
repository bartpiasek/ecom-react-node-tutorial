import React from 'react';

export default function CartScreen() {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('='[1]): 1;
    return (
        <div>
           <h1>Cart Screen</h1>
           <p>Dodaj to koszyka : ProductID: {productId} Ilość: {qty}</p>
        </div>
    );
}