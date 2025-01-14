import React from 'react'
import Enav from './Enav'
import ProductCard from './ProductCard';

const Store = () => {

  const product = {
    name: 'Product Name',
    description: 'This is a description of the product. It is amazing and you should buy it!',
    price: 29.99,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681711647066-ef84575c0d95?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
  };

  return (
    <>
    <Enav/>

    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard product={product} />      
    </div>

    </>
  )
}

export default Store
