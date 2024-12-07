import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAsyncError, useNavigate } from 'react-router-dom'

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
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMJgkCP1OiW_erePuzV8KxgU3KChKj1yykA&s" 
				 alt="bg"
				 className="w-full h-full object-contain" 
				 />
			</div>
			<div className='w-[100%] bg-blue-900 mt-10'>
				<h1 className='text-center text-3xl text-white font-light'>All Product</h1>
			</div>
			<select name="" id=""  value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="">All Products</option>
				<option value="Aluminium Free Deodorant">Aluminuim Free Deodorants</option>
				<option value=" Aromatherapy"> Aromatherapy</option>
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
			<div className=' grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 lg:gap-4 mx-5 md:mx-7 lg:mx-20 mt-10'>
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





