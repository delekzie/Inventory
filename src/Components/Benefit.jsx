import React from 'react' 

function Smallbox ({text}) {	
	return (
		<>
		<div className='text-dark text-xs p-2 bg-white w-[120px] h-[10vh] rounded-md flex text-center items-center'>
			<div></div>
			<p>{text}</p>
		</div>
		</>
	)
}
export default function Benefit() {
  return (
	<>

      <div className='content-center'>

				<div className="mx-5 lg:mx-24 my-10 flex flex-row justify-center items-center text-center">
			{/* Top Border */}
			<div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>

			{/* Heading */}
			<h1 className="text-xl lg:text-4xl font-semibold text-blue-900">
			Benefit of Luxe Skincare
			</h1>

			{/* Bottom Border */}
			<div className="border-t border-blue-800 w-1/2 lg:w-1/4 my-5"></div>
			</div>



		 <div className='back text-blue-800'>
					<div className="relative h-[60vh] w-[720px]">
			{/* Top-left corner */}
			<div className="absolute top-4 left-4 flex items-center">
				<Smallbox text="Advanced Formulation" />
			</div>

			{/* Top-right corner */}
			<div className="absolute top-4 right-4 flex items-center">
				<Smallbox text="Hydration and Nourishment" />
			</div>

			{/* Bottom-left corner */}
			<div className="absolute bottom-4 left-4 flex items-center">
				<Smallbox text="Anti-aging Benefit" />
			</div>

			{/* Bottom-right corner */}
			<div className="absolute bottom-4 right-4 flex items-center">
				<Smallbox text="Gentle and non-irritating" />
			</div>
			</div>
		 </div>
	  </div>

	</>
  )
}
