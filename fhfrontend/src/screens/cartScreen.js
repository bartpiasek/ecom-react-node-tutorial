import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartAction';
import { useDispatch } from 'react-redux';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
        <div>
           <h1>Koszyk</h1>
           <p>Dodaj to koszyka : ProductID: {productId} Ilość: {qty}</p>
        </div>
    );
}