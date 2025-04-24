import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <div className=''>
            <div className='border-2  border-white flex justify-around '>
                    <p> usernames: admin@me.com, e@e.com, e2@e.com, e3@e.com, e4@e.com</p>
                    <p>password:123</p>

                </div>
                <div className='flex h-screen w-screen items-center justify-center'>
                    <div className='border-2 border-emerald-600 rounded-xl p-20'>
                        <form
                            onSubmit={(e) => {
                                submitHandler(e)
                            }}
                            className='flex flex-col items-center justify-center'>

                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required
                                className='border-2 border-emerald-600 rounded-full py-3 px-4 text-xl text-white outline-0 bg-transparent placeholder:text-gray-400 mb-3' type="email" placeholder='Enter your Email' />

                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                required
                                className='border-2 border-emerald-600 rounded-full py-3 px-4 text-xl text-white outline-0 bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your password' />

                            <button
                                className='border-none rounded-3xl py-3 px-4 text-xl text-white outline-0 bg-emerald-600 placeholder:text-white mt-3'>Login in</button>
                        </form>
                    </div>
                </div>

            </div>


        </>


    )
}

export default Login