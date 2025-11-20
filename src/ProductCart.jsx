import React, { useState, useEffect } from 'react';

function ProductCart({ cart, setCart }) {
  const [use, setUse] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/product.json")
      .then(res => res.json())
      .then(data => setUse(data))
      .catch(error => console.error("Fetch error:", error));
  }, []);

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const displayedProducts = showAll ? use : use.slice(0, 12);

  return (
    <div className="container mx-auto mt-28 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {displayedProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 text-gray-700 rounded-2xl p-5 flex flex-col justify-center items-start hover:shadow-lg transition"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-red-500">{item.category}</h1>
            <div className="w-full h-40 sm:h-48 md:h-52 lg:h-60 flex justify-center items-center mt-3">
              <img className="h-full w-full object-contain" src={item.image} alt={item.category} />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-500 mt-4">{item.brand}</div>
            <div className="w-full flex justify-between items-center mt-2">
              <p className="font-bold text-base sm:text-lg md:text-xl">
                Price: <span className="text-red-500">{item.price}</span> tk
              </p>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-16 sm:w-20 h-10 sm:h-12 bg-amber-300 flex justify-center items-center rounded-2xl hover:bg-blue-100 hover:text-red-500 transition"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {!showAll && use.length > 12 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCart;
