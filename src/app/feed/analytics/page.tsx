import Article from '@/components/article'
import React from 'react'
import lady from '../../../../public/lady.png'

const page = () => {
  return (
      <section className='ml-10 mt-5 w-[90%]'>
          <h1 className='font-bold text-3xl text-black'>Posts analytics</h1>
          <h2 className='text-2xl font-medium pt-4 pb-3'>May 2023, <span className='text-[#626262] text-base'> 25days so far</span></h2>
          <div className='bg-primary h-[2px] w-full'></div>
          <h3 className='text-2xl font-bold pt-3'>Posts highlights</h3>
          <h4 className='text-3xl font-bold py-3'>Top posts <span className='text-[#626262] text-lg font-normal'>earned 2980 impressions</span></h4>

          <div className='w-[60%] mt-6 ml-0'>
              
              <Article
              author='Grace Ikpang'
              role='Product designer'
              date='May 25th, 2023'
              authorImage={lady}
              title='Starting out as a Product designer'
              p='Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.' />
          </div>
          <button className='bg-primary text-white px-9 py-3 rounded-lg'>View post activity</button>

          <div className='mt-12'>
              <h2 className='font-bold text-2xl'>Posts summary</h2>
              <p className='text-lg text-[#626262] py-3'>May 2023 summary</p>
                <div className='bg-primary h-[2px] w-full'></div>
          </div>

          <div className='text-2xl grid grid-cols-2 w-[40%] gap-y-6 py-6 gap'>
              <div>
                  <h3 className=' text-[#626262]'>Posts</h3>
                  <p className='font-bold'>3</p>
              </div>
              <div>
                  <h3 className=' text-[#626262]'>Post Impressions</h3>
                  <p className='font-bold'>2.98k views</p>
              </div>
              <div>
                  <h3 className=' text-[#626262]'>Profile visits</h3>
                  <p className='font-bold'>300</p>
              </div>
              <div>
                  <h3 className=' text-[#626262]'>New followers</h3>
                  <p className='font-bold'>300</p>
              </div>
          </div>
    </section>
  )
}

export default page