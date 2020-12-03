import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    if (!product) {
        return <div>Nie znaleziono produktu!</div>;
    }
    return (
        <div>
            <Link to="/">Wróć do zakupów</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating 
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Opis: 
                            <p>{product.descriptions}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Cena</div>
                                    <div className="price">
                                        PLN {product.price}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Dostępność</div>
                                    <div>
                                        {product.countInStock > 0 
                                        ? (<span className="success">In stock</span>)
                                        : (<span className="danger">Out of stock</span>)
                                    }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button id="cart" className="primary block">Dodaj do koszyka</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

