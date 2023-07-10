'use client'
import { ReactNode, SetStateAction, useState, useEffect } from 'react'
import Image from 'next/image'
import Form from './Form';
import SignUp from '../../../public/signup.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../services/firebase";

interface IFormInput {
  firstName: string
    lastName: string
    usertype: string
    password: string
    confirmPassword: string
    email: string
}


export default function Home() {
const router = useRouter()

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
    };
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>()
    
    const [user, loading, error] = useAuthState(auth);
    
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const {firstName, lastName, email, password} = data
        registerWithEmailAndPassword(firstName, email, password)
    }
useEffect(() => {
    if (loading) return;
    if (user) router.push('/feed')
  }, [user, loading, router]);
    const password = watch("password", "");

  return (
      <div className='grid grid-cols-5 space-x-40'>
          <div className='relative container col-start-1 col-end-3'>
              <Image src={SignUp} alt='lady in glasses' className='h-auto max-w-full object-cover' />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="text-white text-center -pt-24">
      <h1 className="text-center uppercase font-bold text-5xl ">Chatter</h1>
      <p className="w-[90%] mx-auto text-left py-10">Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
    </div>
  </div>
          </div>
        <section className='col-start-3 col-end-5 p-5 w-full'>
              <div>
                  <Link href='/register'><span>Register</span></Link>
                  <Link href='/login'><span>Login</span></Link>
                  {/* <span>Login</span> */}
              </div>
              <h2 className='text-left font-bold text-3xl p-3 px-6'>Register as a Writer/Reader</h2>
              <form id='form' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                   <div className='flex justify-between gap-x-4'>
                      
                    <div className='flex flex-col text-[#3B3B3B]  gap-y-3'>
                        <label htmlFor="firstName" className='text-base'>First name</label>
                          <input type="text" {...register("firstName", { required: true })} placeholder='John' name='firstName' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                          {/* {errors.firstName?.type === "required" && "First Name is required"} */}
                          {errors.firstName && <span className='text-red-500'>This field is required</span>}
                    
                    </div>
                
                    <div className='flex flex-col text-[#3B3B3B]  gap-y-3'>
                        <label htmlFor="lastName" className='text-base'>Last name</label>
                          <input type="text" {...register("lastName", { required: true })} placeholder='Doe' name='lastName' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                          {errors.lastName && <span className='text-red-500'>This field is required</span>}
                          
                    
                    </div>
                  </div>
                   <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                    <p>You are joining as?</p>
                      <input type="text" {...register("usertype", { required: true })} placeholder='Writer' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                      {errors.usertype && <span className='text-red-500'>This field is required</span>}
                </div>
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                    <label htmlFor="email">Email address</label>
                      <input type="text" {...register("email", { required: true })} placeholder='Johndoe@gmail.com' name='email' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                      {errors.email && <span className='text-red-500'>This field is required</span>}
                  </div>
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                      <label htmlFor="password">Password</label>
                  <input type="text" {...register("password", {required: true})} placeholder='*******' name='password' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                  </div>
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                      <label htmlFor="cPassword">Confirm Password</label>
                      <input type="text"  {...register("confirmPassword", { required: true , validate: (value: string) => value === password || "Passwords do not match."})} placeholder='*******' name='cPassword' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                        {errors.confirmPassword && <span className='text-red-500'>Passwords do not match</span>}

                  </div>
                  <input type='submit' className='w-full bg-[#543EE0] rounded-lg py-3 text-white'value='Create account'/>
              </form>
               <button className='w-full border border-[#CED4DA] rounded-lg py-3 my-6' onClick={signInWithGoogle}>Sign up with google</button>
                <button className='w-full border border-[#CED4DA]  rounded-lg py-3 mb-6'>Sign up with LinkedIn</button>
        </section>
      </div>
  )
}
