import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userAction.js';
import CartScreen from './screens/cartScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import OrderHistoryScreen from './screens/orderHistoryScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import PaymentMethodScreen from './screens/paymentMethodScreen.js';
import PlaceOrderScreen from './screens/placeOrderScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import registerScreen from './screens/registerScreen.js';
import ShippingAddressScreen from './screens/shippingAddressScreen.js';
import SigninScreen from './screens/signinScreen.js';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Foodhunterki store
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Koszyk
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Wyloguj
                      </Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Historia zamówień</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Zaloguj</Link>
              )
            }
            { userInfo && userInfo.isAdmin && (
              <div className="dropdtown">
                <Link to="#admin">
                  Admin<i className="fa fa-caret-down"></i>
                </Link>
                <ul className="droptown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/products">Produkty</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Zamówienia</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Uzytkownicy</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/register" component={registerScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          {/* <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute> */}
          <Route path="/" component={HomeScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
