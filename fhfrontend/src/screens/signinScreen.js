import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {

    //hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const submitHandler = (e) => {
        e.preventDefaut();
    }

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