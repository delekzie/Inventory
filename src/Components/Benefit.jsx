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
		 <h1 className='text-2xl lg:text-3xl font-semibold text-center mt-10 mb-4 text-blue-800'>Benefit of Luxe Skincare</h1>
		 <div className='back text-blue-800 bg-blue-50 mx-5'>
					<div className="relative h-[55vh] w-[720px]">
			{/* Top-left corner */}
			<div className="absolute top-4 left-4 flex items-center">
				<Smallbox text="Advanced Formulation" />
			</div>

			{/* Top-right corner */}
			<div className="absolute top-4 right-4">
				<Smallbox text="Hydration and Nourishment" />
			</div>

			{/* Bottom-left corner */}
			<div className="absolute bottom-4 left-4">
				<Smallbox text="Anti-aging Benefit" />
			</div>

			{/* Bottom-right corner */}
			<div className="absolute bottom-4 right-4">
				<Smallbox text="Gentle and non-irritating" />
			</div>
			</div>
		 </div>
	  </div>

	</>
  )
}
