import React, { useState } from 'react'
import { auth } from './Authentication'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import tick from "./tick.jpeg"
import RefreshIcon from '@mui/icons-material/Refresh'
import myself from "./my.webp"

export default function SignIn() {

let [SignUpDetails,SetSignUpDetails]=useState({
    firstName:"",lastName:"",email:"",password:""
})    

let [showWaiting,SetShowWaiting]=useState(false)
let [showError,SetShowError]=useState(false)

let [moveToHome,SetMoveToHome]=useState(false)



//Functions
const handleChange=(e)=>{
let {value,name}=e.target

SetSignUpDetails((prev)=>({
    ...prev,[name]:value
}))}


const handleSubmit=(e)=>{
    e.preventDefault()
    SetShowWaiting(true)
    createUserWithEmailAndPassword(auth,SignUpDetails.email,SignUpDetails.password)
    .then((userCredentials)=>{console.log(userCredentials); SetShowWaiting(false); SetMoveToHome(true) })
    .catch((error)=>{console.error(error);SetShowWaiting(false); SetShowError(true)})

}

  return (
    <>
    <div className={`${moveToHome ? "hidden" :"flex" } flex-col  h-screen  bg-black text-green-500`}  >
        <form className={`${!moveToHome ? "flex" : "hidden"}  p-2 text-center text-xl flex flex-col w-100 m-auto gap-4 text-black`} onSubmit={handleSubmit}>
        <img src={myself} className='h-20 z-20 w-20 rounded-full  m-auto'/>

            <header className='text-center text-2xl font-extrabold text-white '>SIGN In</header>
            <input className=' p-1 rounded-full border-2 border-grey-100 ' required name='firstName' onChange={handleChange} value={SignUpDetails.firstName}  type='text' placeholder='First Name'/>
            <input className=' p-1 rounded-full border-2 border-grey-100 ' required name='lastName'  onChange={handleChange} value={SignUpDetails.lastName} type='text' placeholder='Last Name'/>
            <input className=' p-1 rounded-full border-2 border-grey-100 ' required name='email' onChange={handleChange} value={SignUpDetails.email} type='email' placeholder='Email'/>
            <input className=' p-1 rounded-full border-2 border-grey-100 ' required name='password'  onChange={handleChange} value={SignUpDetails.password} type='password' placeholder='Password'/>
            <button type='submit' className='bg-pink-500 hover:bg-pink-700 font-bold text-white tracking-wider rounded-full p-1 w-1/2 mt-2 m-auto'>Sign Up</button>
            <p className={`${showWaiting ? "block" :"hidden" } font-bold text-green-500 `}><RefreshIcon className='animate-spin text-white'/></p>
            <p className={`${!showError ? "hidden" :"block" } font-bold text-red-500`}>Retry. No internet or Wrong Details .<br/> Also Password should be of atleast 6 characters</p>
             
            {/* ALREADY HAVE AN ACCOUNT */}

            <p className='text-white'>Already have an account ? <Link className='font-bold text-blue-500' to={"/login"} >Login</Link></p>
        </form>
     
    </div>
     
            {/* MOVE TO HOME PAGE AFTER SIGN UP */}
     <div className={`${moveToHome ? "flex" : "hidden"} h-screen bg-slate-100 justify-center align-center shadow-blue-100 shadow-md p-10 text-xl flex-col gap-10 font-bold shadow-md shadow-black text-center `}>
     <span><img src={tick} className='h-20 w-20 m-auto bg-blue-800 ' alt='tick'/></span>
      <p className='text-purple-500 text-2xl'>Hello {SignUpDetails.firstName}</p>
      <p className='text-black'>WELCOME</p>
      <Link to={"/home"}><button className='border-2 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700'>CONTINUE</button></Link>
      </div>
      </>
  )
  }
