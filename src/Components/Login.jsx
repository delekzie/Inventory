import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
		const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [message, setMessage] = useState("")

	const handleLogin = async (e) => {
		e.preventDefault(); // Prevent form default submission
		const url = "http://localhost:3000/user/login";
	
		try {
			// Send login credentials to the backend
			const response = await axios.post(url, { email, password });
			console.log(response)
				// Extract data from the response
			const data = response.data;
			console.log(data);
			const { status, message, user} = response.data;
			
			// Save user data to localStorage if login is successful
			localStorage.setItem("user", JSON.stringify(data));
	   // Save user ID and token to localStorage
				localStorage.setItem(
					"user",
					JSON.stringify({ _id: user._id, email: user.email })
				);
			// Check login status
			if (data.status === "success") {
				setMessage(response.data.message)
				setTimeout(() => setMessage(""), 3000)
				navigate("/homepage");
			} else {
				// Set error message if login fails
				setMessage(data.message);
				
			}
		} catch (error) {
			// Handle any errors during the request
			console.error(error);
			setMessage(error.response?.data?.message || error.message);
			setTimeout(() => setMessage(""), 3000);
		}
	

	}

	

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
	
		<h1 className='text-2xl font-semibold mt-3'  >Login</h1>
		<p className='text-sm my-2'>Enter your credentials</p>

		{message && <p style={{ backgroundColor: "grey" ,borderRadius: 
		"8px", padding: "10px", color: message.includes('success') ? "green" : "red" }}>{message}</p>}

		<form action="" className='form'>
		
			<input type="email" required placeholder='Email' autoComplete="on" onChange={(e)=>setEmail(e.target.value)}/>
			<br />

			<input type="password" required  placeholder='Password' autoComplete="on" onChange={(e)=>setPassword(e.target.value)}/>
			<br />

		</form>
		<button type='submit' className='mt-3' onClick={handleLogin}>Login</button>

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
