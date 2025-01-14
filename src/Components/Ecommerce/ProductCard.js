import React from 'react'
import '../CSS/MainTheme.css'

const ProductCard = ({ product }) => {
  return (
    <>

        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-teal-700 transform transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:border-teal-800">
            <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-52 object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
             <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <button className="px-4 py-2 mainbutton text-white text-sm font-semibold rounded transition duration-200">
                Add to Cart
                </button>
             </div>
            </div>
        </div>
      
    </>
  )
}

export default ProductCard
