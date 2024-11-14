import React from 'react'
import {Link} from "react-router-dom"
export default function NotFound() {
  return (
	<>
	<div className="text-center bg-red-700 text-white">
	<h1 className='text-6xl'>ERROR 404!!!</h1>
	<p className='text-3xl'>Page Not Found</p>
	<h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dolorum dolores beatae a quas laudantium consequuntur voluptas dolor amet perspiciatis maiores tenetur cupiditate, facilis animi molestiae nisi aliquid expedita mollit ia.</h1>
	
	<button className='border border-2 p-2 rounded-xl bg-blue-400 mb-5'><Link to ="/">Home Page</Link></button>
	</div>
	</>
  )
}
