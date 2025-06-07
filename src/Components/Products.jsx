import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {
const navigate = useNavigate()
//state change
const [items, setItem] = useState([])
const [category, setCategory] = useState()



	useEffect(() => {
		productsLoader()
	}, [category])
	

	const productsLoader = async () => {
		const url = category ? `http://localhost:3000/products?category=${(category)}` :  "http://localhost:3000/products"
		try{
			const response = await axios.get(url)
			console.log("Response",response)
			const data = response.data
			console.log("Data", data)
			setItem(response.data)
			return data;
			
		}catch(error){
			console.log(error)
		}
	
	}

	const handleClick = (_id) => {
        navigate(`/products/${_id}`);
    };


  return (
	<React.Fragment>
		<div>
			<div className="w-full  overflow-hidden">
	            <img src="https://www.drteals.com/wp-content/uploads/2017/12/SBAO_SaltFB_019_Sized_16-9-750x600.jpg" 
				 alt="bg"
				 className="w-full h-[500px] object-cover" 
				 />
			</div>

			<div className="mx-5 lg:mx-24 my-10 flex flex-row justify-center items-center text-center">
			{/* Top Border */}
			<div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>

			{/* Heading */}
			<h1 className="text-xl lg:text-3xl font-semibold text-blue-900">
			All Products
			</h1>

			{/* Bottom Border */}
			<div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>
			</div>

				<div className="flex items-center w-full bg-blue-900 py-4 px-4 gap-4 w-full border ">
				<div className="flex-1">
					<input
						type="text"
						placeholder="Search for your product..."
						className="flex-1 py-2 text-gray-700 bg-white border border-gray-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
						Search
					</button>
				</div>


				{/* Category Dropdown */}
				<div>
					<select
					name="category"
					id="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className="w-full px-8 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					>
					<option value="">All Products</option>
					<option value="Aluminium Free Deodorant">Aluminuim Free Deodorants</option>
					<option value="Aromatherapy">Aromatherapy</option>
					<option value="Bath and Body Oil">Bath and Body Oil</option>
					<option value="Body Wash">Body Wash</option>
					<option value="Body Lotion">Body Lotion</option>
					<option value="Body Oil">Body Oil</option>
					<option value="Body Scrub">Body Scrub</option>
					<option value="Facial Toner">Facial Toner</option>
					<option value="Foot Cream">Foot Cream</option>
					<option value="Kids">Kids</option>
					<option value="Pure Epsom Salt Soaks">Pure Epsom Salt Soaks</option>
					</select>
				</div>
</div>

			<div className=' grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-4 mx-5 md:mx-7 lg:mx-20 py-10'>
				{items.map((product, index)=>(
					
					<div onClick={() => handleClick(product._id)} key={product._id} className='flex flex-col text-center justify-center items-center shadow-md p-6 mt-5' >
						<h2 className='text-2xl font-light text-blue-800'>{product.name}</h2>
                        <img src={product.image} alt={product.name} className='w-[200px] mt-5'/>
						<hr className="border-t border-blue-800 w-1/2 mx-auto mt-5"></hr>
                        <p className='text-blue-800 mt-2 text-lg'>{product.description}</p>
                        <p className='text-blue-900 font-bold text-sm'>Price:  &#8358; {product.price.toLocaleString('en-NG')}</p>
						<p className='text-blue-800 text-sm mt-1'>{product.category}</p>
                        <p className='text-lime-500 text-xs mt-1 font-semibold'>{product.inStock ? 'In-Stock' : 'Out of Stock'}</p>
						<button className='bg-blue-900 text-white px-8 py-2 mt-2' >More Info...</button>
					</div>
				))}
			</div>
		</div>
	</React.Fragment>
  )
}





