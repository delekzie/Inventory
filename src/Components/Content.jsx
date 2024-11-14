import React from 'react'
import image2 from '../images/Image-2.png'
import logo from '../images/Logo.png'
import Vector from '../images/Vector.png'
import Blossom from '../images/Blossom.png'
import Row1 from '../images/row-1.png'
import Row2 from '../images/row-2.png'
import Row3 from '../images/row-3.png'
import Buy from '../images/Buy.png'
import footer1 from '../images/footer-1.png'
import footer2 from '../images/footer-2.png'



export default function Content() {
  return (
	<>
		<div className='mt-20 grid grid-cols-2 mx-24'>
			<div >
				<img src={image2} alt="" className='h-[600px] object-contain' />
			</div>

			<div className=''>
			
			<div className="flex border border-orange-200 w-[150px] px-3 py-2 items-center text-center rounded-3xl text-lg">
				<span><img src={Blossom} alt="" /></span>
			    <button className='ml-3'>About Us</button>
			</div>
				<h1 className='text-5xl mt-5'>Your Journey to Radiates Skin  Starts Here</h1>
				<h2 className='text-4xl mt-5'>Brand Story</h2>
				<p className='mt-5 text-xl'>Born from a passion for natural beauty and innovation, [Brand <br /> Name] 
					Skincare blends the finest botanicals with cutting-edge <br /> technology. 
					Our mission is simple: to empower individuals to <br /> embrace their natural
					 beauty while achieving radiant, healthy- <br />looking skin. With a commitment
					  to quality and sustainability, we <br /> strive to inspire confidence and self-care 
					  rituals that elevate  <br />everyday beauty routines. Welcome to a world where nature 
					  meets <br /> science, and beauty begins with [Brand Name] Skincare.</p>

					  <div className='grid grid-cols-2 justify-self-start gap-4 mt-5'>
						<div className='flex flex-col items-center'>
						<span><img src={Vector} alt="" /></span>
							<h1 className='text-sm mt-1'>Beauty Innovation Award</h1>
							<span className='text-gray-400 text-xs mt-1'>Issued on Jan 2024</span>
						</div>
						<div className='flex flex-col items-center '> 
							<span><img src={Vector} alt="" /></span>
							<h1 className='text-sm mt-1'>Sustainability Essence Award</h1>
							<span className='text-gray-400 text-xs mt-1'>Issued on Feb 2024</span>
						</div>
					  </div>
			</div>
		</div>

		<div className='mt-10 lg:mx-24'>
			<div>
				<h1 className=' lg:text-2xl '> Your Skin Care Catalogue</h1>
				<input type="text" placeholder='Search' className='border border-3 w-[350px] mt-3 rounded-3xl px-5 py-2' /> 
			</div>

			<div className=' mt-10 lg:flex justify-between'>
				<div className='w-[400px] bg-gray-50 rounded-3xl'>
					<div className="relative">

					<img src={Row1} alt="" className='w-[400px] rounded-xl' />
					<button className='cursor-pointer'><img src={Buy} className='absolute top-8 right-8 bg-zinc-700 rounded-3xl p-3' alt="" /></button>
					<p className='absolute bottom-10 left-4 w-[90px] font-semibold p-2 bg-zinc-700 text-gray-100 items-center text-center rounded-3xl '>$40.00</p>
					</div>
						<div className='py-8 flex justify-between items-center p-3'>
							<div className="flex flex-col ">
							   <h3 className='font-semibold text-sm'>Hand Cream</h3>
							   <p className='text-xs mt-2'>Oil, hand wash and cream</p>
							</div>
							 <button className=' h-[5vh] w-[100px] rounded-2xl text-gray-100' style={{backgroundColor: "#92344C"}}>Buy Now</button>
						 </div>
				</div>
				<div className='w-[400px] bg-gray-50 rounded-3xl mt-5 lg:mt-0'>
					<div className="relative">
					<img src={Row2} alt="" className='w-[400px] rounded-xl' />
					<button className='cursor-pointer'><img src={Buy} className='absolute top-8 right-8 bg-zinc-700 rounded-3xl p-3' alt="" /></button>
					<p className='absolute bottom-10 left-4 p-2 w-[90px] font-semibold bg-zinc-700 text-gray-100 items-center text-center rounded-3xl '>$40.00</p>
					</div>
						<div className='py-8 flex justify-between items-center p-3'>
							<div className="flex flex-col ">
							   <h3 className='font-semibold text-sm'>Hand Cream</h3>
							   <p className='text-xs mt-2'>Oil, hand wash and cream</p>
							</div>
							 <button className=' h-[5vh] w-[100px] rounded-2xl text-gray-100' style={{backgroundColor: "#92344C"}}>Buy Now</button>
						 </div>
				</div>
				<div className='w-[400px] bg-gray-50 rounded-3xl mt-5 lg:mt-0'>
					<div className="relative">
					<img src={Row3 } alt="" className='w-[400px] rounded-xl' />
					<button className='cursor-pointer'><img src={Buy} className='absolute top-8 right-8 bg-zinc-700 rounded-3xl p-3' alt="" /></button>
					<p className='absolute bottom-10 left-4 p-2 w-[90px] bg-zinc-700 font-semibold text-gray-100 items-center text-center rounded-3xl '>$40.00</p>
					</div>
					
						<div className='py-8 flex justify-between items-center p-3'>
							<div className="flex flex-col ">
							   <h3 className='font-semibold text-sm'>Hand Cream</h3>
							   <p className='text-xs mt-2'>Oil, hand wash and cream</p>
							</div>
							 <button className=' h-[5vh] w-[100px] rounded-2xl text-gray-100' style={{backgroundColor: "#92344C"}}>Buy Now</button>
						 </div>
				</div>
			</div>
			<div className="flex justify-end my-10">
			<button className=' border border-2 h-[5vh] w-[100px] rounded-2xl text-gray-100  ' style={{backgroundColor: "#92344C"}}>View all</button>
			</div>
		</div>

		<div className='grid grid-cols-2 mx-24 my-10'>
				<div >
					<img src={footer1} alt="" className='image'  />
				</div>
				<div  className='relative'>
					<img src={footer2} alt=""  className='image'/>
					<div className='absolute content-container text-center text-white shadow-2xl' style={
						{
							width: "350px",
							height: "350px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}
					}>
						<button className='w-[150px] px-4 py-2 border border-2 rounded-3xl shadow-xl bg-transparent '>Let's Start</button>
						<h1 className='text-3xl mt-8'>Your smile is our prioirity</h1>
						<p className='text-xl mt-5'>We're enhancing your oral care routine</p>
						<button className='mt-8 w-[150px] px-4 py-2 text-white rounded-3xl shadow-xl' style={{backgroundColor: "#92344C"}}>Shop Now</button>
					</div>
				</div>
		</div>

		 <div className='grid grid-cols-4  gap-8 px-24 items-center content-center py-14' style={{backgroundColor: "#FFF2E8"}}>
			<div>
				<img src={logo} alt="" className='w-[35px]'/>
				<p className='mt-4 text-sm'>Be the first to recieve all the recent updates, information, on our new products</p>
				<div className='mt-6 flex items-center gap-2'>
					<input type="text" placeholder='Email Address' className='py-2 px-4 rounded-lg border border-gray-400 text-sm w-full '/>
					<button  className="px-4 py-2 text-white rounded-lg shadow-md w-[150px]"
        style={{ backgroundColor: "#92344C" }}>Subscribe</button>
				</div>
			</div>
			{/* quick link */}
			<div className='text-center'>
			<h1 className=" text-lg mb-4">Quick Links</h1>
				<ul className="space-y-2 text-sm">
					<li className='cursor-pointer'>Home</li>
					<li className='cursor-pointer'>About</li>
					<li className='cursor-pointer'>Our Product</li>
					<li className='cursor-pointer'>Contact</li>
				</ul>
			</div>
			{/* socials */}
			<div className='text-center'>
				<h1 className=" text-lg mb-4">Socials</h1>
				<ul className="space-y-2 text-sm ">
					<li className='cursor-pointer'>Twitter</li>
					<li className='cursor-pointer'>Instagram</li>
					<li className='cursor-pointer'>Facebook</li>
					<li className='cursor-pointer'>Whatsapp</li>
				</ul>
			</div>
			{/* address */}
					<div className='text-center'>
						<h1 className=' text-lg mb-4'>Address</h1>
						<p className="text-sm leading-6 cursor-pointer">123 Beauty <br /> Avenue <br /> Los Angeles, CA <br /> 40001 <br /> United State </p>
					</div>
		</div>			
	</>
  )
}
