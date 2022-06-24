import React, { useState } from 'react'

function Login() {
    return (
        <div>
            <div className='logo-container grid grid-cols-2'>
                <div className="bg-gray-100 w-full h-screen flex justify-center">
                    <span className='logo font-bold text-[8rem] self-center'>Logo</span>
                </div>

                <div className='login-container'>
                    <div className='login my-[20px]'>
                        <span className='font-bold'>Register</span>
                        <br></br>
                        <span>Username or Email: <input className='border-2'></input></span>
                    </div>

                    <div className='password my-[20px]'>
                        <span>Password: <input className='border-2'></input></span>
                    </div>

                    <button className='border-2'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login
