'use client'
import { ReactNode, SetStateAction, useState, useEffect } from 'react'
import Image from 'next/image'
import SignUp from '../../../public/signup.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../services/firebase";
//@ts-ignore
import { useAuthState } from "react-firebase-hooks/auth";


interface IFormInput {
    password: string
    email: string
}


export default function Login() {
  const [inputValue, setInputValue] = useState('')
  const router = useRouter();

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
    };
    
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { email, password } = data
    logInWithEmailAndPassword(email, password)
    }
  const password = watch("password", "");

  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {

      return;
    }
    if (user) router.push('/feed');
  }, [user, loading, router])

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
                  <Link href='/signup'><span>Register</span></Link>
                  <Link href='/login'><span>Login</span></Link>
              </div>
              <h2 className='text-left font-bold text-3xl p-14'>Welcome back</h2>
              <form id='form' className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                   
                  
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                    <label htmlFor="email">Email address</label>
                      <input type="text" {...register("email", { required: true })} placeholder='Johndoe@gmail.com' name='email' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                      {errors.email && <span className='text-red-500'>This field is required</span>}
                  </div>
                  <div  className='flex flex-col text-[#3B3B3B] flex-1 gap-y-3'>
                      <label htmlFor="password">Password</label>
                  <input type="text" {...register("password", {required: true})} placeholder='*******' name='password' className='border border-[#CED4DA] p-2 rounded-lg shadow-input' />
                  </div>

                  <input type='submit' className='w-full bg-[#543EE0] rounded-lg py-3 text-white'value='Log in'/>
              </form>
               
        </section>
      </div>
  )
}
