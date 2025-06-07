import React from 'react'


export default function HeroSection() {
  return (
	<>

		<div className="bg leading-relaxed flex  h-screen">
		<div className="lg:flex flex-col justify-center items-start mx-5 lg:mx-20 text-left">
			<h1 className="text-white text-3xl lg:text-6xl font-bold">
			Indulge in Beauty <br /> Your Natural Glow with <br /> Dr Teals Skincare
			</h1>
			<p className="text-white mt-8 text-2xl font-semibold">
			Our luxurious skincare formulations are crafted to nourish, <br /> rejuvenate, and reveal your inner radiance
			</p>
			<button
			className="mt-8 bg-blue-900 text-gray-50 px-8 py-2 shadow-xl font-bold rounded-md hover:bg-blue-800 hover:shadow-2xl transition-all font-semibold text-lg"
			>
			SHOP NOW
			</button>
		</div>
		</div>


	</>
  )
}
