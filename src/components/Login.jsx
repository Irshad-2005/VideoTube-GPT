import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const toggleToSignIn = ()=>
    {
        setIsSignInForm(!isSignInForm)
    }

    const email = useRef(null);
    const password = useRef(null);

    const handleSignInSignUpForm = ()=>
    {
        //validate email and password
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidateData(email.current.value,password.current.value);
        setErrorMessage(message)
    }
    return (
        <div >
            <Header/>
            <div className='w-full h-screen absolute'>
                <img className="w-full h-screen" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
                    alt="background"/>
            </div>

                <form onSubmit={(e)=>{e.preventDefault()}}
                className='absolute p-12 bg-black my-32 mx-auto right-0 left-0 w-3/12 opacity-85 text-white'>
                    <h1 className='font-bold text-3xl p-2 my-2 '> {isSignInForm ? "Sign In":"Sign Up"}</h1>
                    {!isSignInForm && <input type="text" placeholder='Full Name' className='p-3 my-4 bg-gray-600 w-full rounded-sm'/>}
                    <input 
                    ref={email}
                    type="email" 
                    placeholder='Email Address' 
                    className='p-3 my-4 bg-gray-600 w-full rounded-sm'/>
                    <input 
                    ref = {password}
                    type="password" 
                    placeholder='Password' 
                    className='p-3 my-4 bg-gray-600 w-full rounded-sm' />
                    <p className='text-lg text-red-500'>{errorMessage}</p>
                    <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' 
                    onClick={handleSignInSignUpForm}>
                        {isSignInForm  ? "Sign In" :"Sign Up"}
                        </button>
                    <p className='py-4 cursor-pointer' 
                    onClick={toggleToSignIn}> 
                    {isSignInForm ? "New to Netflix? Sing Up Now":"Already registered? Sign Up Now"}</p>
                </form>
        </div>
    )
}

export default Login