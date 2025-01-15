import React from 'react'
import '../CSS/MainTheme.css'


const ProductCard = ({ product }) => {
  return (
    <>

        <div className="max-w-[13rem] rounded-lg overflow-hidden shadow-lg border border-teal-700 transform transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:border-teal-800">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-44 object-cover"
          /> 

            <div className="p-2">
                <h3 className="text-lg font-semibold text-red-800 line-clamp-1">{product.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
              
             <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold text-red-800">${product.price}</span>
                <button className="px-3 py-1 mainbutton text-white text-sm font-semibold rounded transition duration-200">
                Add to Cart
                </button>
             </div>
            </div>
        </div>
      
    </>
  )
}

export default ProductCard
