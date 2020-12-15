import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderAction';

import CheckoutStep from '../components/CheckoutStep';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderScreen(props) {
    const orderId = props.match.params.id;
    const orderDetails = useSelector(state => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);

    return loading? (<LoadingBox></LoadingBox>):
    error? (<MessageBox variant="danger">{error}</MessageBox>)
    : (
        <div>
            <h1>Zamówienie {order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Dostawa</h2>
                                <p>
                                    <strong>Nazwa:</strong> 
                                    {order.shippingAddress.fullName} <br />
                                    <strong>Adres:</strong> 
                                    {order.shippingAddress.address},
                                    {order.shippingAddress.city}, 
                                    {order.shippingAddress.postalCode}, 
                                    {order.shippingAddress.country}
                                </p>
                                {order.isDelivered? (
                                    <MessageBox variant="success">Dostarczono w {order.deliveredAt}
                                    </MessageBox>)
                                : (<MessageBox variant="danger"> Nie dostarczony</MessageBox>
                                )}
                            </div>
                        </li>

                        <li>
                            <div className="card card-body">
                                <h2>Płatność</h2>
                                <p>
                                    <strong>Sposób płatności:</strong> 
                                    {order.paymentMethod} <br />
                                </p>
                                {order.isPaid? (
                                    <MessageBox variant="success">Opłacone w {order.paidAt}
                                    </MessageBox>)
                                : (<MessageBox variant="danger"> Nie opłacone</MessageBox>
                                )}
                            </div>
                        </li>

                        <li>
                            <div className="card card-body">
                                <h2>Produkty</h2>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Zamówienie - podsumowanie</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Przedmioty</div>
                                    <div>PLN {order.itemsPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Dostawa</div>
                                    <div>PLN {order.shippingPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>VAT</div>
                                    <div>PLN {order.taxPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div><strong>Razem</strong></div>
                                    <div><strong>PLN {order.totalPrice}</strong></div>
                                </div>
                            </li>
                            

                        </ul>
                    </div>            
                </div>
            </div>
        </div>
    )
}