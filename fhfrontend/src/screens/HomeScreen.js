import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {
  // HOOK - default value is empty array
  const [products, setProducts] = useState([]);
  // HOOK - show loading
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // FILL products array
  useEffect(() => {
    //fetch products from backend
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch(err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

    return (
      <div>
        {loading ? (<LoadingBox></LoadingBox>)
        :
        error ? (<MessageBox variant="danger">{error}</MessageBox>)
        : (
          <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product> 
              ))}  
          </div>
        )}
      </div>       
    );
}