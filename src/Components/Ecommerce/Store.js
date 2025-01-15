import React, { useEffect, useState } from 'react'
import Enav from './Enav'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { fetchProducts } from './Eapi';

const Store = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <Enav/>

    <div className="pt-28 p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 ">
      {products.map((product) => (
        <Link key={product.id} to="/productDetails" state={{ product }} className="block"><ProductCard product={product} /></Link>
      ))}            
    </div>

    </>
  )
}

export default Store
