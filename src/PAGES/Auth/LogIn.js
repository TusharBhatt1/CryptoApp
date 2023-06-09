import React, { useState } from 'react'
import { auth } from './Authentication'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import tick from "./tick.jpeg"


export default function SignIn() {

let [loginDetails,SetLoginDetails]=useState({
    email:"",password:""
})    

let [showError,SetShowError]=useState(false)

let [moveToHome, SetMoveToHome]=useState(false)
//Functions
const handleChange=(e)=>{
let {value,name}=e.target

SetLoginDetails((prev)=>({
    ...prev,[name]:value
}))}


const handleSubmit=(e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth,loginDetails.email,loginDetails.password)
    .then((userCredentials)=>{console.log(userCredentials); SetMoveToHome(true)})
    .catch((error)=>{console.error(error); SetShowError(true)})
 

    console.log(loginDetails)
}

  return (
    <>
    <div className={`${moveToHome ? "hidden" : "flex"} bg-black h-screen`}>
        <form className='flex flex-col p-4 m-auto gap-5 text-white ' onSubmit={handleSubmit}>
        <header className='text-bold text-center font-extrabold text-2xl text-white font-serif'>LOG IN</header>
            <input className='p-2 bg-transparent border-b-2  ' required name='email' onChange={handleChange} value={loginDetails.email} type='email' placeholder='Email'/>
            <input className='p-2 bg-transparent border-b-2 ' required name='password'  onChange={handleChange} value={loginDetails.password} type='password' placeholder='Password'/>
            <button type='submit' className='bg-pink-500 rounded-full p-2 font-serif tracking-wider font-bold text-white mt-4 w-1/2 m-auto'>Log In</button>

             
            <p className={`${!showError ? "hidden" :"block" } font-bold text-red-500`}>User Not Found.</p>
            <Link className='font-bold text-blue-500 text-center ' to={"/signin"} >Sign Up</Link>
        </form>
      </div>
    <div className={`${moveToHome ? "flex" : "hidden"} h-screen bg-red-200 justify-center align-center shadow-blue-100 shadow-md p-10 text-xl flex-col gap-10 font-bold text-center `}>
    <span><img src={tick} className='h-20 w-20 m-auto bg-blue-800 ' alt='tick'/></span>
      <p className='text-purple-500 text-2xl'>Hello {loginDetails.email}</p>
      <p className='text-black'>WELCOME</p>
      <Link to={"/home"}><button className='border-2 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700'>CONTINUE</button></Link>
      </div>
     
 
    </>

  )
  }
