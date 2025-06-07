import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export default function ProductDetails() {
	const [details, setDetails] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState(1)
  

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
    const url = "http://localhost:3000/cart"; // Replace with your API endpoint
    try {
      // Ensure productId and quantity are provided
      if (!productId || !quantity) {
        console.error("Product ID and quantity are required.");
        return;
      }
      const userObj = getItemLocal();
      if (!userObj || !userObj._id) {
        console.error("User ID is not defined. Ensure the user is logged in.");
        return;
      }

  
      // Construct the request payload
      const item = {
        userId: userObj._id,
        item: {
          productId,
          quantity,
        },
      };
  
      console.log("Request Payload:", item);
  
      // Make the POST request
      const response = await axios.post(url, item, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Cart Response:", response);
  
      // Handle the response
      const data = response.data;
      console.log("Cart Data:", data);
      // Optionally set a success message
       setMessage(data.message);
       setTimeout(() => setMessage(""), 3000)
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      if (error.response) {
        console.error("Server Response:", error.response.data);
      }
      // Optionally set an error message
      setMessage(error.message);
    }
  };
  

 

 

  // Compute total price based on product price and count
  const totalPrice = details ? details.price * quantity : 0;



  return (
    <React.Fragment>
      <div>
        {details && (
          <div>
            
                      
                <div className="mx-5 lg:mx-24 my-10 flex flex-row justify-center items-center text-center mt-32">
                    {/* Top Border */}
                    <div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>

                    {/* Heading */}
                    <h1 className="text-xl lg:text-3xl font-semibold text-blue-900">
                    Product Details
                    </h1>

                    {/* Bottom Border */}
                    <div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>
                </div>

            <div className=" mt-5 mx-5 lg:mx-[300px] shadow-md p-5">
              <div className="lg:mx-10 lg:flex lg:gap-10">
                <div className="lg:w-1/2 mt-10">
                  <h2 className=" text-2xl md:text-4xl lg:text-4xl  text-blue-800 font-semibold">
                    {details.name}
                  </h2>
                  <p className="text-blue-800 font-bold mt-5 lg:mt-5 text-xl md:text-2xl">
                    {" "}
                    Price: &#8358; {totalPrice.toLocaleString("en-NG")}
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
               
                {/* Buy Now Button */}
                <h1 className='text-lg text-blue-900'>{message}</h1>
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


