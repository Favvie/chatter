import Article from '@/components/article'
import Image from 'next/image'
import React from 'react'

import lady from '../../../../public/lady.png'
import cross from '../../../../public/icons/cross.svg'

const page = () => {
  return (
      <section className='ml-10 mt-5 w-[90%] border border-[#d0d0d0] rounded-lg'>
      <button className='bg-primary text-white px-9 py-3 rounded-lg bg-opacity-50'>Publish</button>
      <div className='flex gap-x-9'>
        <span className='p-4 border border-[#d0d0d0] w-[60px] h-[60px] inline-block rounded-full'>
          <Image src={cross} alt='cross icon' />
        </span>
        <div>
          <input type="text" placeholder='Title' className='placeholder:font-bold placeholder:text-[#d0d0d0] placeholder:text-5xl outline-none' />
          <input type='' />
        </div>
      </div>
          <h1 className='font-bold text-3xl text-black'>Posts analytics</h1>
          <h2 className='text-2xl font-medium pt-4 pb-3'>May 2023, <span className='text-[#626262] text-base'> 25days so far</span></h2>
          <div className='bg-primary h-[2px] w-full'></div>
          <h3 className='text-2xl font-bold pt-3'>Posts highlights</h3>
          <h4 className='text-3xl font-bold py-3'>Top posts <span className='text-[#626262] text-lg font-normal'>earned 2980 impressions</span></h4>

          <div className='w-[%] mt-6 ml-0'>
              
              <Article
              author='Grace Ikpang'
              role='Product designer'
              date='May 25th, 2023'
              authorImage={lady}
              title='Starting out as a Product designer'
              p='Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.' />
          </div>

          

          
    </section>
  )
}

export default page