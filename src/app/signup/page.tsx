'use client'
import { SetStateAction, useState } from 'react'
import Image from 'next/image'

export default function Home() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (
      <main className='min-h-screen min-w-screen flex justify-between'>

          <div className='bg-signup bg-center bg-no-repeat bg-cover h-screen w-2/5 flex items-center justify-center '>
              <div className='text-white p-9'>
                  <h1 className='text-center uppercase font-bold text-5xl '>Chatter</h1>
                  <p>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
              </div>
          </div>
          <section className='h-full     pt-6 mr-24 w-3/5 pl-[15%] '>
              <div className='flex space-x-4  uppercase font-bold'><div className='border-b-2 border-black'>Register</div><div className='border-b-2 border-black'>Login</div></div>
              <h2 className='text-left font-bold text-3xl p-6'>Register as a Writer/Reader</h2>
              <form action="" className='space-y-6'>
                <div className='flex justify-between gap-x-4'>
                      
                    <div className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                        <label htmlFor="firstName" className='text-base'>First name</label>
                        <input type="text" placeholder='John' name='firstName' onChange={handleInputChange} className='border border-[#CED4DA] p-2 rounded-lg shadow-input'/>
                    </div>
                
                    <div className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                        <label htmlFor="lastName" className='text-base'>Last name</label>
                        <input type="text" placeholder='Doe' name='lastName' onChange={handleInputChange} className='border border-[#CED4DA] p-2 rounded-lg shadow-input'/>
                    </div>
                </div>
               
                <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                    <p>You are joining as?</p>
                    <input type="text" placeholder='Writer' className='border border-[#CED4DA] p-2 rounded-lg shadow-input'/>
                </div>
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                    <label htmlFor="email">Email address</label>
                  <input type="text" placeholder='Johndoe@gmail.com' name='email' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                  </div>
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                      <label htmlFor="password">Password</label>
                  <input type="text" placeholder='*******' name='password' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                  </div>
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                      <label htmlFor="cPassword">Confirm Password</label>
                  <input type="text" placeholder='*******' name='cPassword' className='border border-[#CED4DA] p-2 rounded-lg shadow-input'/>
                  </div>
                  <button className='w-full bg-[#543EE0] rounded-lg py-3 text-white'>Create account</button>
              </form>
                <button className='w-full border border-[#CED4DA] rounded-lg py-3 my-6'>Sign up with google</button>
                <button className='w-full border border-[#CED4DA]  rounded-lg py-3 mb-6'>Sign up with LinkedIn</button>

          </section>
    </main>
  )
}
