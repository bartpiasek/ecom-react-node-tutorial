import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Foodhunterki</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen}></Route>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product}></Product> 
              ))}  
            </div>
        </main>
        <footer className="row center">
            All right reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
