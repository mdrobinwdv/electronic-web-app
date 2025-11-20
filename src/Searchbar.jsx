import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

function Searchbar({ cart, setCart }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showCartBox, setShowCartBox] = useState(false);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleSearch = () => {
    const result = products.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
    setShowAll(false);
  };

  const handleDelete = () => {
    setSearch("");
    setFiltered([]);
    setShowAll(false);
  };

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleremoveCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  const display = showAll ? filtered : filtered.slice(0, 10);

  return (
    <>
      {/* 🔍 Search Bar */}
      <div className="w-full bg-gray-100 py-4 mt-28 relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-3 px-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Your Product..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition rounded-md"
            >
              Search
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition rounded-md"
            >
              Delete
            </button>
          </div>

          {/* 🛒 Cart Button */}
          <div className="ml-0 md:ml-4 mt-2 md:mt-0">
            <button
              onClick={() => setShowCartBox(!showCartBox)}
              className="w-full sm:w-[180px]  h-[60px] flex justify-center items-center gap-3 px-3 text-xl border border-red-500 rounded-2xl bg-yellow-300 text-blue-600 font-bold"
            >
              <FaCartShopping className="text-3xl text-red-500" /> Cart : {cart.length}
            </button>
          </div>

          {/* 🧺 Cart Box */}
          {showCartBox && (
            <div className="fixed top-36 right-4 sm:right-5 w-[90%] sm:w-[400px] max-h-[70vh] bg-yellow-100 border rounded-md shadow-2xl p-4 z-50 overflow-y-auto">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold">Cart Items</p>
                {/* X button visible only on mobile */}
                <button
                  onClick={() => setShowCartBox(false)}
                  className="sm:hidden w-[42px] h-[42px] flex justify-center items-center text-red-500 font-bold text-4xl  bg-blue-300 rounded-md mb-3 "
                >
                  ×
                </button>
              </div>
              <ul className="space-y-2">
                {cart.length === 0 ? (
                  <li className="text-center">No items</li>
                ) : (
                  cart.map((item, index) => (
                    <li key={index} className="flex flex-col gap-1 text-base font-bold border-b pb-2">
                      <div className="flex justify-between items-center">
                        <span>
                          {index + 1}. {item.category}
                        </span>
                        <button
                          onClick={() => handleremoveCart(index)}
                          className="w-7 h-7 flex justify-center items-center text-blue-500"
                        >
                          X
                        </button>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Quantity: <span className="text-blue-600">{item.quantity}</span></span>
                        <span>Price: <span className="text-red-500">${(item.price * item.quantity).toFixed(2)}</span></span>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <div className="border-t-2 border-gray-300 mt-4 pt-3 text-center">
                <p className="text-lg font-bold mb-1">Total</p>
                <p>Items: {cart.length}</p>
                <p>Total Price: <span className="text-red-500">${getTotalPrice().toFixed(2)}</span></p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 📦 Search Results */}
      {filtered.length > 0 && (
        <div className="container mx-auto py-4 px-4">
          <h2 className="text-xl font-bold mb-4">Search Results:</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {display.map((item) => (
              <div
                key={item.id}
                className="bg-gray-200 text-gray-700 rounded-2xl p-4 flex flex-col justify-center items-start hover:shadow-lg transition"
              >
                <h1 className="text-xl font-bold uppercase text-red-500">{item.category}</h1>
                <div className="w-full h-40 flex justify-center items-center mt-2">
                  <img className="h-full w-full object-contain" src={item.image} alt={item.category} />
                </div>
                <div className="text-lg font-bold text-blue-500 mt-2">{item.brand}</div>
                <div className="w-full flex justify-between items-center mt-2">
                  <p className="font-bold text-base">
                    Price: <span className="text-red-500">{item.price} tk</span>
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-20 h-10 bg-amber-300 rounded-2xl flex justify-center items-center hover:bg-blue-100 hover:text-red-500 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </ul>

          {!showAll && filtered.length > 10 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setShowAll(true)}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Show All
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Searchbar;
