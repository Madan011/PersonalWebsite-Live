import React from 'react'
import Enav from './Enav'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';


const Store = () => {

  const product = [
    {
    id: 1,
    name: 'Product Name',
    description: 'This is a description of the product. It is amazing and you should buy it!',
    price: 29.99,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681711647066-ef84575c0d95?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Product Name',
    description: 'This is a description of the product. It is amazing and you should buy it!',
    price: 29.99,
    imageUrl: 'https://img.drz.lazcdn.com/g/kf/S619c6204d1104b41bd3e99b4906a1c940.jpg_720x720q80.jpg',
  },
  {
    id: 3,
    name: 'Product Name',
    description: 'This is a description of the product. It is amazing and you should buy it!',
    price: 29.99,
    imageUrl: 'https://img.drz.lazcdn.com/g/kf/S619c6204d1104b41bd3e99b4906a1c940.jpg_720x720q80.jpg',
  },
  {
    id: 4,
    name: 'Product Name',
    description: 'This is a description of the product. It is amazing and you should buy it!',
    price: 29.99,
    imageUrl: 'https://img.drz.lazcdn.com/g/kf/S619c6204d1104b41bd3e99b4906a1c940.jpg_720x720q80.jpg',
  },
  {
    id: 5,
    name: 'Product Name',
    description: 'This is a description of the product. It is amazing and you should buy it!',
    price: 29.99,
    imageUrl: 'https://img.drz.lazcdn.com/g/kf/S619c6204d1104b41bd3e99b4906a1c940.jpg_720x720q80.jpg',
  },
  {
    id: 6,
    name: 'Product Name',
    description: 'This is a description of the product. It is amazing and you should buy it!',
    price: 29.99,
    imageUrl: 'https://img.drz.lazcdn.com/g/kf/S619c6204d1104b41bd3e99b4906a1c940.jpg_720x720q80.jpg',
  },
  ];

  return (
    <>
    <Enav/>

    <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 ">
      {product.map((product) => (
        <Link key={product.id} to="/productDetails" state={{ product }} className="block"><ProductCard product={product} /></Link>
      ))}            
    </div>

    </>
  )
}

export default Store
