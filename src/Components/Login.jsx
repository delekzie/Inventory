import React from 'react'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom';

export default function Login() {

	const containerStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		backgroundColor: '#f0f0f0',
		width: "100vw"
	  };
	  const centerDivStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20px',
		width: '500px',
		maxWidth: '90%',
		backgroundColor: 'white',
		border: '1px solid #ddd',
		borderRadius: '8px',
		boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
	  };
	  
  return (
	<>
	<div className="container" style={containerStyle}>
		
	<div style={centerDivStyle}>
	<img src={logo} className='w-[60px]' alt="" />
		<h1 className='text-xl font-semibold mt-3'  >Sign Up</h1>
		<p className='text-sm my-2'>Enter your credentials</p>

		<form action="" className='form'>
		
			<input type="email" required placeholder='Email' autoComplete="on"/>
			<br />

			<input type="password" required  placeholder='Password' autoComplete="on"/>
			<br />

		</form>
		<button type='submit' className='mt-3'>Login</button>
    <p className='mt-2 text-xs text-gray-500'>Don't have an account? <Link to="/register">Register</Link></p>
	</div>
	</div>
	</>
  )
}



















{/* {careers.map(career=> (
    // a link to a particular page {career.id toString()}
    <div key={career.id}>
        <p>{career.title}</p>
        <p>Based in {career.location}</p>
    </div>
   ))} */}

// export const careerLoader = async () => {
//   const res = await fetch ("http://localhost:4000/careers")

//   return res.json()
// }
