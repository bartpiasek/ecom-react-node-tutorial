import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePaymentMethod } from '../actions/cartAction';
import CheckoutStep from '../components/CheckoutStep';

export default function PaymentMethodScreen(props) {
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        // import function from cartaction
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };

    return (
        <div>
            <CheckoutStep step1 step2 step3></CheckoutStep>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Płatność</h1>
                </div>
                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="paypal" 
                            value="PayPal" 
                            name="paymentMethod" 
                            required 
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input 
                            type="radio" 
                            id="visa" 
                            value="Visa" 
                            name="paymentMethod" 
                            required 
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="visa">Visa</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Kontynuuj</button>
                </div>
            </form>
        </div>
    )
}