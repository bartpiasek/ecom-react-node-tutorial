import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userAction.js';

export default function SigninScreen(props) {

    //hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const redirect = props.location.search 
        ? props.location.search.split('=')[1]
        : '/';

    // copying from App.js
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefaut();
        // signin action
        dispatch(signin(email, password));
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
                    <h1>Zaloguj się</h1>
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
                    <label />
                    <button className="primary" type="submit">Zaloguj się
                    </button>
                <div>
                    <label></label>
                    <div>
                        Nie masz konta? {' '}
                        <Link to="/register">Utwórz konto</Link> 
                    </div>
                </div>    
                </div>
            </form>
        </div>
    )
}