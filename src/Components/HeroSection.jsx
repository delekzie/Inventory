import React from 'react'
import image1 from '../images/Hero-product1.png'
import logo from '../images/Logo.png'
import {NavLink, Outlet} from "react-router-dom"


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

		<div className="flex flex-wrap justify-between items-center content-center text-white text-xl px-6 md:px-16 py-4">
  {/* Left Section - Links */}
  <div className="w-full md:w-auto">
    <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
      <li className="px-5 cursor-pointer">About</li>
      <li className="px-5 cursor-pointer">Our Product</li>
      <li className="px-5 cursor-pointer">Contacts</li>
    </ul>
  </div>

  {/* Center Section - Logo */}
  <div className="w-full md:w-auto flex justify-center my-4 md:my-0">
    <img src={logo} alt="Logo" className="h-10 w-auto" />
  </div>

  {/* Right Section - Actions */}
  <div className="w-full md:w-auto">
    <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
      <li className="px-5 cursor-pointer">Cart</li>
      <li className="px-5 cursor-pointer"><NavLink to="login">Login</NavLink></li>
      <li className="px-5 cursor-pointer"><NavLink to="register">Sign Up</NavLink></li>
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
		
		<main>
			<Outlet/>
		</main>
	</>
  )
}
