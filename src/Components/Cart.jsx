import React, { useEffect, useState } from "react";
import axios from "axios";

const getItemLocal = () => {
  const storedItem = localStorage.getItem("user");
  return JSON.parse(storedItem);
};

const Cart = () => {
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  // Clear success message after 3s
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    const userObj = getItemLocal();
    if (userObj && userObj._id) {
      setUserId(userObj._id);
    } else {
      setError("User ID not found in localStorage.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cart/${userId}`);
        setCart(response.data);
      } catch (err) {
        setError("Failed to load cart data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

  const deleteProduct = async (userId, productId) => {
    if (!userId || !productId) return;

    const url = `http://localhost:3000/cart/${userId}/${productId}`;
    try {
      const response = await axios.delete(url);
      if (response.status === 200) {
        setMessage(response.data.message);
        setCart((prevCart) => ({
          ...prevCart,
          items: prevCart.items.filter((item) => item?.productId?._id !== productId),
        }));
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  // Handle quantity increase
  const handleIncrease = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item?.productId?._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  };

  // Handle quantity decrease
  const handleDecrease = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item?.productId?._id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    }));
  };

  const totalAmount = cart?.items?.reduce((acc, item) => {
    return acc + item.productId.price * item.quantity;
  }, 0);

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="px-8 lg:px-20 py-8 bg-gray-50 min-h-screen mt-[50px]">
      <div className="flex items-center py-10">
        <div className="flex-1 border-t border-gray-300 w-1/2"></div>
        <h1 className="px-4 text-4xl text-blue-900 whitespace-nowrap">My Cart</h1>
        <div className="flex-1 border-t border-gray-300 w-1/2"></div>
      </div>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      {cart && cart.items.length > 0 ? (
        <div className="overflow-y-auto max-h-[800px] border rounded-lg shadow-md bg-white">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="sticky top-0 bg-blue-800">
              <tr>
                <th className="text-left px-4 py-4 text-gray-50 font-bold text-lg lg:text-2xl">Image</th>
                <th className="text-left px-4 py-4 text-gray-50 font-bold text-lg lg:text-2xl">Product</th>
                <th className="text-left px-4 py-4 text-gray-50 font-bold text-lg lg:text-2xl">Price</th>
                <th className="text-left px-4 py-4 text-gray-50 font-bold text-lg lg:text-2xl">Quantity</th>
                <th className="text-left px-4 py-4 text-gray-50 font-bold text-lg lg:text-2xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item?.productId?._id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-800 ">
                    <img
                      src={item.productId.image}
                      alt={item.productId.name}
                      className="lg:w-[200px] lg:h-[200px] object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3 text-blue-800 ">
                    <h2 className="text-sm lg:text-2xl font-semibold text-blue-800 ">{item.productId.name}</h2>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm lg:text-xl font-semibold text-blue-800 ">
                      &#8358; {item.productId.price.toLocaleString("en-NG")}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <div className=" ">
                      <div className="flex flex-cols text-lg font-bold text-blue-800  justify-center space-x-4">
                        <button
                          onClick={() => handleIncrease(item.productId._id)}
                          className=""
                        >
                          +
                        </button>

                        <p className="">{item.quantity}</p>

                        <button
                          onClick={() => handleDecrease(item.productId._id)}
                          className=""
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => deleteProduct(userId, item.productId._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t border-gray-300 "></div>
          <div className="flex flex-row justify-between px-8 lg:px-20 my-5">
            <div className=" text-xl font-semibold text-blue-900">
              TOTAL: &#8358; {totalAmount.toLocaleString("en-NG")}
            </div>
            <button className="bg-blue-900 text-gray-50 px-6 py-2 shadow-xl rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg">
              Pay Now
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
