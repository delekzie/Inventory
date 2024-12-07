import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export default function ProductDetails() {
	const [details, setDetails] = useState(null)
  const [count, setCount] = useState(1)

  const { id } = useParams()
    useEffect(() => {  
      productDetails(id)
    }, [id])

	
	const productDetails = async (id) => {
		try { 
			  console.log("Provided ID:", id);

			  const url = `http://localhost:3000/products/${id}`;
			  const response = await axios.get(url);
			  console.log("Result:", response);

			  const data = response.data;
			  console.log(response.data)

			  setDetails(response.data)
			  return data;

		 } catch (error) {
       console.error("Error fetching product details:", error);
		 }
	};
	


const getItemLocal = () => {
		const storedItem = localStorage.getItem("user")
    return JSON.parse(storedItem) 
    
	}


  const addToCart = async (productId, quantity) => {
    const url = "http://localhost:3000/cart" // Replace with your API endpoint
    try {
      // Make sure productId and quantity are passed
      if (!productId || !quantity) {
        console.error("Product ID and quantity are required.");
        return;
      }
     const userObj = getItemLocal()
      // Sending the POST request
      const item = {
         userId : userObj._id,
         item : {
          productId,
          quantity
         }
      } 
      const response = await axios.post(url, item);
      console.log("Cart Response:", response);
      // Logging the response
      const data = response.data;
      console.log("Cart Data:", data);
    } catch (error) {
      // Logging error details
      console.error("Error adding to cart:", error.message);
    }
  };


  // const Cart = ({ cart }) => {
  //   const allCart = cart.length; 
  //   Cart()
  // }
    
//handle increament and decreament

  const handleIncrease = () => {
   setCount(prevCount => prevCount + 1)
  }
  const handleDecrease = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  }




  return (
    <React.Fragment>
      <div>
        {details && (
          <div>
            <div className=" bg-blue-900 mt-10">
              <h1 className="text-center text-3xl text-white font-light p-5">
                Product Details
              </h1> 
            </div>

            <div className=" mt-5 mx-5 lg:mx-[300px] shadow-md p-5">
              <div className="lg:mx-10 lg:flex lg:gap-10">
                <div className="lg:w-1/2 mt-10">
                  <h2 className=" text-2xl md:text-4xl lg:text-4xl  text-blue-800 font-semibold">
                    {details.name}
                  </h2>
                  <p className="text-blue-800 font-bold mt-5 lg:mt-5 text-xl md:text-2xl">
                    {" "}
                    &#8358; {details.price.toLocaleString("en-NG")}
                  </p>
                  <p className="mt-8 lg:mt-5 text-gray-600 text-sm md:text-xl lg:text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore dolore, earum sapiente iusto corrupti repudiandae
                    quos quasi eaque adipisci ab illo molestiae amet nostrum
                    eveniet quidem eum voluptates, minima officia.
                  </p>
                  <h2 className=" mt-2 text-blue-800 font-semibold">
                    Category: {details.category}
                  </h2>
                </div>

                <div className="mt-5 flex justify-center items center lg:w-1/2">
                  <img
                    src={details.image}
                    alt=""
                    className="max-w-sm lg:h-[300px] rounded-lg shadow-xs"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center my-7 lg:mx-10">
                {/* Quantity Selector */}
                <div className="flex flex-col justify-center items-center">
                 
                  <div className="flex items-center justify-between w-[120px] bg-gray-50 rounded-md shadow-md">
                    <button onClick={handleIncrease} className="py-2 px-3 font-bold text-2xl text-blue-800 hover:text-white hover:bg-blue-800 transition-all rounded-l-md">
                      +
                    </button>
                    <p className="text-lg px-3 font-bold text-blue-800">{count}</p>
                    <button onClick={handleDecrease} className="py-2 px-3 font-bold text-2xl text-blue-800 hover:text-white hover:bg-blue-800 transition-all rounded-r-md">
                      -
                    </button>
                  </div>
                </div>

                {/* Buy Now Button */}
                <button onClick={() => addToCart(id, 1)} className="bg-blue-900 text-gray-50 px-8 py-2  shadow-xl rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}


