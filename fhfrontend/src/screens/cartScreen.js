import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        // delete action
        
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };

    return (
        <div className="row top">
            <div className="col-2">
                <h1>Koszyk</h1>
                {cartItems.length === 0
                ? <MessageBox>Koszyk jest pusty 
                    <Link to="/">Strona główna</Link>
                  </MessageBox>
                : <ul>
                    {cartItems.map((item) => (
                        <li key={item.product}>
                            <div className="row">
                                <div>
                                    <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="small"
                                ></img>
                                </div>
                                <div className="min-30">
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div>
                                    <select 
                                        value={item.qty} 
                                        onChange={e => 
                                            dispatch(
                                                addToCart(item.product, 
                                                Number(e.target.value))
                                            )
                                        }>
                                        {[...Array(item.countInStock).keys()].map(
                                            (x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                            )
                                        )}
                                        </select>
                                </div>
                                <div>
                                    PLN {item.price}
                                </div>
                                <div>
                                    <button 
                                        type="button" 
                                        onClick={() => removeFromCartHandler(item.product)}
                                    >Usuń</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Razem: ({cartItems.reduce((a, c) => a + c.qty, 0)} produktów): 
                                PLN {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                onClick={checkoutHandler} 
                                className="primary block" 
                                disabled={cartItems.length === 0}
                            >Zapłać</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}