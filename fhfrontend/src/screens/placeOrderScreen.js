import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutStep from '../components/CheckoutStep';


export default function PlaceOrderScreen(props) {
    const cart = useSelector(state => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }
    
    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );

    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0): toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const placeOrderHandler = () => {

    };

    return (
        <div>
            <CheckoutStep step1 step2 step3 step4></CheckoutStep>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Dostawa</h2>
                                <p>
                                    <strong>Nazwa:</strong> 
                                    {cart.shippingAddress.fullName} <br />
                                    <strong>Adres:</strong> 
                                    {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, 
                                    {cart.shippingAddress.postalCode}, 
                                    {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>

                        <li>
                            <div className="card card-body">
                                <h2>Płatność</h2>
                                <p>
                                    <strong>Sposób płatności:</strong> 
                                    {cart.paymentMethod} <br />
                                </p>
                            </div>
                        </li>

                        <li>
                            <div className="card card-body">
                                <h2>Produkty</h2>
                                <ul>
                                    {cart.cartItems.map((item) => (
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
                                                    {item.qty} x
                                                    PLN {item.price} = PLN {item.qty * item.price}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
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
                                    <div>PLN {cart.itemsPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Dostawa</div>
                                    <div>PLN {cart.shippingPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>VAT</div>
                                    <div>PLN {cart.taxPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div><strong>Razem</strong></div>
                                    <div><strong>PLN {cart.totalPrice}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    onClick={placeOrderHandler} 
                                    className="primary block"
                                    disabled={cart.cartItems.length === 0}
                                >Zamów</button>
                            </li>
                        </ul>
                    </div>            
                </div>
            </div>
        </div>
    )
}