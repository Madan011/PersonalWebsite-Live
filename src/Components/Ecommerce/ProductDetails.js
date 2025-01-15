import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Enav from './Enav';

const ProductDetails = () => {
    const { ProductId } = useParams();
    const location = useLocation();

    const product = location.state?.product || {
        id: ProductId,
        name: "Unknown Product",
        description: "No description available.",
        price: "N/A",
        imageUrl: "https://via.placeholder.com/300",
        dimensions: "N/A",
        weight: "N/A",
        material: "N/A",
        warranty: "N/A",
    }

  return (
    <>
        <Enav showSearchBar={false} />

        {/* Product Details Section */}
        <section className="bg-white rounded-lg shadow-md border border-gray-300 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="flex justify-center items-center">
                <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-lg w-full max-w-xs object-cover"
                />
            </div>

        {/* Product Information */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-xl text-teal-700 font-semibold mt-2">${product.price}</p>
                <p className="text-gray-600 mt-4">{product.description}</p>

                {/* Key Features */}
                <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800">Key Features:</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                    <li>High-quality material ensures long-lasting durability.</li>
                    <li>Compact and lightweight design for easy handling.</li>
                    <li>Available in multiple colors to suit your preferences.</li>
                    <li>Eco-friendly packaging that reduces environmental impact.</li>
                </ul>
                </div>

                {/* Specifications */}
                <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800">Specifications:</h3>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                    <li>Dimensions: {product.dimensions || "N/A"}</li>
                    <li>Weight: {product.weight || "N/A"}</li>
                    <li>Material: {product.material || "N/A"}</li>
                    <li>Warranty: {product.warranty || "N/A"}</li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Customer Reviews:</h3>
            <div className="mt-4 space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold">"Fantastic Product!"</p>
                <p className="text-gray-600 mt-1">
                "I absolutely love this {product.name}! It has exceeded all my expectations, and the quality is amazing. Highly recommend it to anyone."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Jane D.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-gray-800 font-semibold">"Great Value for Money"</p>
                <p className="text-gray-600 mt-1">
                "This product is worth every penny. The design is stunning, and it performs just as described."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Mark T.</p>
            </div>
            </div>
        </section>

        {/* Add to Cart Section */}
        <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-teal-800 transition duration-200">
            Add to Cart
            </button>
        </div>

      
    </>
  )
}

export default ProductDetails
