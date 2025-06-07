import React from 'react'
import logo from '../images/Logo.png'
import Vector from '../images/Vector.png'
import image from '../images/Image-2.png'
import Blossom from '../images/Blossom.png'
import Buy from '../images/Buy.png'




export default function Content() {
  return (
	<>
		<div className=' lg:mt-20 grid lg:grid-cols-2 mx-5 lg:mx-24' id="about">
			<div >
				<img src={image} alt="" className='h-[600px] object-contain' />
			</div>

			<div className='text-blue-900'>
			
			<div className="flex border border-blue-200 w-[150px] px-3 py-2 items-center text-center rounded-3xl text-lg">
				<span><img src={Blossom} alt="" /></span>
			    <button className='ml-3 font-bold'>About Us</button>
			</div >
				<h1 className='text-3xl lg:text-5xl font-bold mt-5'>Your Journey to Radiates Skin  Starts Here</h1>
				<h2 className='text-lg lg:text-4xl font-semibold mt-5'>Brand Story</h2>
				<p className='mt-5 text-sm lg:text-2xl '>Born from a passion for natural beauty and innovation, [Brand <br /> Name] 
					Skincare blends the finest botanicals with cutting-edge <br /> technology. 
					Our mission is simple: to empower individuals to <br /> embrace their natural
					 beauty while achieving radiant, healthy- <br />looking skin. With a commitment
					  to quality and sustainability, <br /> we strive to inspire confidence and self-care 
					  rituals that elevate  <br />  technology. Our mission is simple: to empower individuals to <br /> embrace their natural
					 beauty while achieving radiant, healthy- <br />looking skin. With a commitment
					  to quality and sustainability,<br /> we strive to inspire confidence and self-care 
					  rituals that elevate  <br />everyday beauty routines. Welcome to a world where nature 
					  meets <br /> science, and beauty begins with [Brand Name] Skincare.</p>

					  <div className='grid grid-cols-2 justify-self-start gap-4 mt-5'>
						<div className='flex flex-col items-center'>
						<span className='text-blue'><img src={Vector} alt="" /></span>
							<h1 className='text-xl font-bold mt-1'>Beauty Innovation Award</h1>
							<span className='text-gray-400 text-lg mt-1'>Issued on Jan 2024</span>
						</div>
						<div className='flex flex-col items-center '> 
							<span><img src={Vector} alt="" /></span>
							<h1 className='text-md font-bold mt-1'>Sustainability Essence Award</h1>
							<span className='text-gray-400 text-md mt-1'>Issued on Feb 2024</span>
						</div>
					  </div>
			</div>
		</div>

		<div className='mt-10 text-blue-900'>
						<div className="mx-5 lg:mx-24 flex flex-row justify-center items-center text-center">
				{/* Top Border */}
				<div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>

				{/* Heading */}
				<h1 className="text-xl lg:text-4xl font-bold text-blue-900"> 
					Your Skin Care Catalogue 
				</h1> 

				{/* Bottom Border */}
				<div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>
				</div>


			<div className=' mt-10 lg:flex justify-between lg:mx-24'>
				<div className='lg:w-[400px] bg-gray-50 rounded-3xl'>
					<div className="relative">

					<img src="https://www.drteals.com/wp-content/uploads/2023/05/810021202044_FRONT-500x500.jpg" alt="" className='lg:w-[400px] rounded-xl' />
					<button className='cursor-pointer'><img src={Buy} className='absolute top-8 right-8 bg-zinc-700 rounded-3xl p-3' alt="" /></button>
					<p className='absolute bottom-10 left-4 w-[90px] font-semibold p-2 bg-zinc-700 text-gray-100 items-center text-center rounded-3xl '>$40.00</p>
					</div>
						<div className='py-8 flex justify-between items-center p-3'>
							<div className="flex flex-col ">
							   <h3 className='font-semibold text-xl'>Bath and Body Oil</h3>
							   <p className='text-lg mt-2'>Melatonin & Essential Oils</p>
							</div>
							 <button className='bg-blue-900 text-gray-50 px-8 py-2 shadow-xl rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg'>Popular</button>
						 </div>
				</div>
				<div className='w-[400px] bg-gray-50 rounded-3xl mt-5 lg:mt-0'>
					<div className="relative">
					<img src="https://www.drteals.com/wp-content/uploads/2023/05/811068011002_Front-1-500x500.jpg" alt="" className='w-[400px] rounded-xl' />
					<button className='cursor-pointer'><img src={Buy} className='absolute top-8 right-8 bg-zinc-700 rounded-3xl p-3' alt="" /></button>
					<p className='absolute bottom-10 left-4 p-2 w-[90px] font-semibold bg-zinc-700 text-gray-100 items-center text-center rounded-3xl '>$40.00</p>
					</div>
						<div className='py-8 flex justify-between items-center p-3'>
							<div className="flex flex-col ">
							   <h3 className='font-semibold text-xl'>Foaming Bath</h3>
							   <p className='text-lg mt-2'>Soothe & Sleep Foaming Bath </p>
							</div>
							 <button className=' bg-blue-900 text-gray-50 px-8 py-2  shadow-xl rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg'>Popular</button>
						 </div>
				</div>
				<div className='w-[400px] bg-gray-50 rounded-3xl mt-5 lg:mt-0'>
					<div className="relative">
					<img src="https://www.drteals.com/wp-content/uploads/2023/05/810021201566_Front-500x500.jpg" alt="" className='w-[400px] rounded-xl' />
					<button className='cursor-pointer'><img src={Buy} className='absolute top-8 right-8 bg-zinc-700 rounded-3xl p-3' alt="" /></button>
					<p className='absolute bottom-10 left-4 p-2 w-[90px] bg-zinc-700 font-semibold text-gray-100 items-center text-center rounded-3xl '>$40.00</p>
					</div>
					
						<div className='py-8 flex justify-between items-center p-3'>
							<div className="flex flex-col ">
							   <h3 className='font-semibold text-xl'>Body Wash</h3>
							   <p className='text-lg mt-2'>Gently Cleanses & Helps Hydrate Skin</p>
							</div>
							 <button className=' bg-blue-900 text-gray-50 px-8 py-2  shadow-xl rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg' >Popular</button>
						 </div>
				</div>
			</div>
			{/* <div className="flex justify-end my-10">
			<button className=' bg-blue-900 text-gray-50 px-8 py-2  shadow-xl rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg'>View all</button>
			</div> */}
		</div>

		<div className='grid lg:grid-cols-2 lg:mx-24 lg:my-10 lg:gap-5 mx-5'>
				<div >
					<img src="https://www.drteals.com/wp-content/uploads/2023/05/products_aromatherapy-750x425.jpg" alt="" className='image'  />
				</div>
				<div  className='relative'>
					<img src="https://www.drteals.com/wp-content/uploads/2023/05/products_sugar-scrubs-750x425.jpg" alt=""  className='image'/>
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
						<button className='w-[150px] px-4 py-2 border border-2 rounded-3xl shadow-xl bg-transparent font-bold '>Let's Start</button>
						<h1 className='text-3xl mt-8 font-bold'>Your smile is our prioirity</h1>
						<p className='text-xl mt-5'>We're enhancing your oral care routine</p>
						<button className='mt-8 font-bold text-blue-900 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcauLUVnfCvl2mGvbhQgrbrfjHzYkBR_MUbg&s'>SHOP NOW</button>
					</div>
				</div>
		</div>

			
	</>
  )
}
