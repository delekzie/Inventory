import React, { useState } from 'react'
import logo from '../images/Logo.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


export default function Register() {
	
	const navigate = useNavigate()
	
	const[fullname, setFullname] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword , setConfirmPassword] = useState("")
	const [message, setMessage] = useState("")

	// function to handle submit

	const handleSubmit = (e) => {
		e.preventDefault()
		if(fullname === "" || email=== "" || password === "" && password < 6 ) {
			disp.innerHTML = "Enter your fullname"
			display.innerHTML = "Email is required"
			show.innerHTML = "Password cannot be empty" 
			setTimeout(()=> {
				disp.innerHTML = ""
				display.innerHTML = ""
				show.innerHTML = ""
			}, 3000)
		}else if (password !== confirmPassword) {
			shown.innerHTML = "Password does not match"
			setTimeout(()=> {
				shown.innerHTML = ""
			}, 3000) 
		}else{
			let url = "http://localhost:3000/user/signup"
			axios.post(url, 
				{
					fullname : fullname,
					email : email,
					password : password,
					confirmPassword : confirmPassword
				}
			).then((response)=> {
				console.log("Response", response)
				if(response.data.status === "success"){
					setMessage(response.data.message)
					setTimeout(() => setMessage(""), 3000);
					console.log("message", "Before navigation")
					navigate("/login");
					console.log("Result", "After navigation")
				}
			}).catch((error)=> {
				console.log("Error", error)
				setMessage("An error occurred. Please try again.");
				setTimeout(() => setMessage(""), 3000);
			})
				
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
	<img src={logo} className='w-[60px]' alt="" />
		<h1 className='text-xl font-semibold mt-3'  >Sign Up</h1>
		<p className='text-sm my-1'>Enter your credentials to access the site</p>

		{message && <p style={{ backgroundColor: "yellow" , padding: "5px", color: message.includes('success') ? "green" : "red" }}>{message}</p>}

		<form action="" className='form'>
    
		  <input type="text" required placeholder='Fullname' autoComplete="on" onChange={(e)=>setFullname(e.target.value)}/>
			<div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="disp"></div>
			<br />

		
			<input type="email" required placeholder='Email' autoComplete="on" onChange={(e)=>setEmail(e.target.value)}/>
			<div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="display"></div>
			<br />

			
			<input type="password" required  placeholder='Password' autoComplete="on" onChange={(e)=>setPassword(e.target.value)}/>
			<div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="show"></div>
			<br />

			
			<input type="password" required placeholder='Confirm Password' autoComplete="on" onChange={(e)=>setConfirmPassword(e.target.value)}/>
			<div style={{color: "#e10000", fontFamily:"sans serif", fontSize: "12px"}} id="shown"></div>
			<br />

		</form>
		<button type='submit' className='mt-2' onClick={handleSubmit}>Register</button>
		<p className='my-1 text-xs text-gray-500'>Already have an account? <Link to="/login">Login</Link></p>
	</div>
	</div>
	</>
  )
}
