import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;

    const [qty, setQty] = useState(1);
    // const product = data.products.find(x => x._id === props.match.params.id);
    // product from productdetails redux
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    // if (!product) {
    //     return <div>Nie znaleziono produktu!</div>;
    // }
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        //change path in react app
        props.history.push(`/cart/${productId}?qty={qty}`);
    };

    return (
        <div>
        {loading ? (<LoadingBox></LoadingBox>)
        :
        error ? (<MessageBox variant="danger">{error}</MessageBox>)
        : (
        <div>
            <Link to="/">Wróć do zakupów</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" 
                         src={product.image} 
                         alt={product.name}
                    ></img>
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
                            {
                                product.countInStock > 0 && (
                                    <>
                                    <li>
                                        <div className="row">
                                            <div>Ilość</div>
                                            <div>
                                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys().map(
                                                            (x) => (
                                                            <option key={x+1} value={x+1}>{x + 1}</option>
                                                        ))]
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button onClick={addToCartHandler} className="primary block">Dodaj do koszyka</button>
                                    </li>
                                    </>
                                )}
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
        )}
        </div>     

        
    );
}

