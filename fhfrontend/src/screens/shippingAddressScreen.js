import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartAction';
import CheckoutStep from '../components/CheckoutStep';

export default function ShippingAddressScreen(props) {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    if (!userInfo) {
        props.history.push('/signin');

    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, postalCode, country}));
    };
    props.history.push('/payment');

    return (
        <div>
            <CheckoutStep step1 step2></CheckoutStep>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Adres dostawy</h1>
                </div>
                <div>
                    <label htmlFor="fullName"></label>
                    <input 
                        type="text" 
                        id="fullName" 
                        placeholder="Imię i nazwisko" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="address"></label>
                    <input 
                        type="text" 
                        id="address" 
                        placeholder="Adres dostawy" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city"></label>
                    <input 
                        type="text" 
                        id="city" 
                        placeholder="Miasto" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode"></label>
                    <input 
                        type="text" 
                        id="postalCode" 
                        placeholder="Kod pocztowy" 
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country"></label>
                    <input 
                        type="text" 
                        id="country" 
                        placeholder="Państwo" 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Kontynuuj</button>
                </div>
            </form>
        </div>
    );
}