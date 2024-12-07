import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Cart() {
	const [cart, setCart] = useState(null)
	const [userId, SetUserId] = useState("")

	useEffect(() => {
	  getCart()
	}, [userId])
	
	const getCart = async() =>{
		const url = `http://localhost:3000/cart/${(userId)}`

		try{
			const response = await axios.get(url)
			console.log(response)  
			const data = response.data
			console.log(data)
			setCart(data)

		}catch(error){
			console.log(error)
		}
	}

  return (
	<React.Fragment>
		<h1>Your Cart</h1>

	</React.Fragment>
  )
}
