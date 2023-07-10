'use client'
import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';
// 
// import style from './signup.module.css'

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data: any) => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div >
            <div>
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is sure required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2 bg-signup bg-center bg-no-repeat bg-cover">
                <div className='text-white p-9'>
                  <h1 className='text-center uppercase font-bold text-5xl '>Chatter</h1>
                  <p>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
              </div>
            </div>
        </div>
    </section>
  )
}