import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

export default function HomeScreen() {
  // HOOK - default value is empty array
  const [products, setProducts] = useState([]);
  // FILL products array
  useEffect(() => {
    //fetch products from backend
    const fetchData = async () => {
      const { data } =await axios.get('/api/products');
      setProducts(data);
    };
    fetchData();
  }, []);

    return (      
        <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product> 
              ))}  
        </div>
    );
}