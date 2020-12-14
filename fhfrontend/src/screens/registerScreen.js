import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userAction.js';

import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox';


export default function RegisterScreen(props) {
    //hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 

    const redirect = props.location.search 
        ? props.location.search.split('=')[1]
        : '/';

    // copying from App.js
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefaut();
        // register action
        if (password !== confirmPassword) {
            alert('Wpisane hasła nie są takie same.')
        } else {
            dispatch(register(name, email, password));
        }
    };

    useEffect(() => {
        if (userInfo) {
            // if userinfo has a value, means login is successful
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Zarejestruj się</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Name"
                        required 
                        onChange={ (e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                        required 
                        onChange={ (e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        required 
                        onChange={ (e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Password"
                        required 
                        onChange={ (e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Zarejestruj się
                    </button>
                <div>
                    <label></label>
                    <div>
                        Masz konto?
                        <Link to={`/signin?redirect=${redirect}`}>Zaloguj się</Link> 
                    </div>
                </div>    
                </div>
            </form>
        </div>
    )
};