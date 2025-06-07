import React from 'react'

function Footer() {
  return (
	<>
		 <div id="contact" className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 px-5 lg:gap-8 lg:px-24 items-center content-center py-14 bg-blue-50 text-blue-900'>
			<div className='mx-5 lg:mx-0'>
				<h1 className='text-blue-900 text-3xl font-bold'>Dr.Teals</h1>
				<p className='mt-4 text-xl'>Be the first to recieve all the recent updates, information, on our new products</p>
				<div className='mt-6 flex items-center gap-2'>
					<input type="text" placeholder='Email Address' className='py-2 px-4 rounded-lg border border-gray-400 text-sm w-full '/>
					<button  className=" bg-blue-900 text-gray-50 px-8 py-2  shadow-xl rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg">Subscribe</button>
				</div>
			</div>
			{/* quick link */}
			<div className='text-center'>
			<h1 className=" text-2xl mb-4 font-bold">Quick Links</h1>
				<ul className="space-y-2 text-xl">
					<li className='cursor-pointer'>Home</li>
					<li className='cursor-pointer'>About</li>
					<li className='cursor-pointer'>Our Product</li>
					<li className='cursor-pointer'>Contact</li>
				</ul>
			</div>
			{/* socials */}
			<div className='text-center'>
				<h1 className=" text-2xl mb-4 font-bold">Socials</h1>
				<ul className="space-y-2 text-xl ">
					<li className='cursor-pointer'>Twitter</li>
					<li className='cursor-pointer'>Instagram</li>
					<li className='cursor-pointer'>Facebook</li>
					<li className='cursor-pointer'>Whatsapp</li>
				</ul>
			</div>
			{/* address */}
					<div className='text-center'>
						<h1 className=' text-2xl mb-4 font-bold'>Address</h1>
						<p className="text-xl leading-6 cursor-pointer">123 Beauty <br /> Avenue <br /> Los Angeles, CA <br /> 40001 <br /> United State </p>
					</div>
		</div>	
	</>
  )
}

export default Footer