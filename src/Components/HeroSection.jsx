import React from 'react'
import image1 from '../images/Hero-product1.png'
import logo from '../images/Logo.png'

function Button ({name , height , width ,}) {
	return (
		<>
		<div className="mt-5">
		<button className='rounded-lg text-white text-center text-md font-light' style={
			{
				backgroundColor: "#92344C",
				cursor: "pointer",
				height,
				width
			}
			}>{name}</button>
		</div>
		</>
	)
}

function Card({name, paragraph, }) {

	return(
		<>
		<div className=' shadow-2xl rounded-xl p-7 bg-gray-600'>

			<div className='w-[270px] h-[px] rounded-xl'>
				<img src={image1}
				 alt="hero-product"
				/>
			</div>

			<div className='flex flex justify-between items-center mt-2'>
				<div >
					<h1 className='text-white font-sm'>{name}</h1>
					<p className='text-white text-xs font-light mt-1'>{paragraph.join(", ")}</p>
				</div>

				<Button name = "Buy Now"  height="38px" width="95px"/>
			</div>
		</div>

		</>
	)
}

export default function HeroSection() {
  return (
	<>

	    <div className='bg leading-relaxed'>

		<div className='flex justify-between items-center content-center text-white text-xl px-16'>
				<div >
				<ul className='flex  '>
					<li className='px-5 cursor-pointer'>About</li>
					<li  className='px-5 cursor-pointer'>Our product</li>
					<li className='px-5 cursor-pointer'>Contacts</li>
				</ul>
					</div>
				<div>
				<img src={logo} alt="" />
				</div>
				<div>
					<ul className='flex'>
						<li className='px-5 cursor-pointer'>Cart</li> 
						<li className='px-5 cursor-pointer'>Login</li> 
						<li className='px-5 cursor-pointer'>Sign up</li> 
					</ul>
				</div>
	       </div>

			<div className='flex justify-between items-center  content-center mx-20 mt-[120px]'>
				<div className='flex flex-col'>
					<h1 className='text-white text-6xl font-semibold'>Indulge in Beauty <br /> Your Natural Glow with <br /> Luxe Skincare</h1>
					<p className='text-white mt-5 text-md'>Our luxurious skincare formulations are crafted to nourish, <br /> rejuvenate, and reveal your inner rediance</p>
					<Button name="Shop now" height="40px" width="190px"/>
				</div>
				
				<Card name="Hand Cream" paragraph = {["Oil", "hand wash and cream"]}/>
			</div>
		</div>
		
	</>
  )
}
