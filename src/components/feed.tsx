import React from 'react'

import Article from '@/components/article'
import manGlasses from '../../public/man_in_glasses.png'
import white_guy from '../../public/white_guy.png'
import lady from '../../public/lady.png'
import articlePic from '../../public/articlePic.png'
import CSS from '../../public/css.png'

const FeedComponent = () => {
  return (
    <div className='border border-[#d0d0d0] ml-4 mt-5 mr-10 px-28'>
                  <div className='flex justify-between'>
                      <div>
                        <h3 className='text-black font-medium text-3xl uppercase pb-3 pt-6'>Feed</h3>
                        <p className='text-lg text-[#626262]'>Explore different content you’d love </p>
                      </div>
                          
                      <button className='bg-primary text-white py-3 px-9 rounded-lg self-center relative top-0'>Post a content</button>
                  </div>

                  <section className='mt-10'>
                      <div className='text-black font-medium text-2xl px-14  flex justify-between border border-[#d0d0d0] rounded-lg'>
                          <div className='border-b-4 border-b-primary py-6'>For you</div>
                          <span className='py-6'>Featured</span>
                          <span className='py-6'>Recent</span>
                      </div>
                      <section className=' border border-[#d0d0d0] rounded-lg'>
                          <Article
                              author='Grace Ikpang'
                              authorImage={lady}
                              date='May 25th, 2023'
                              role='product designer'
                              title='Starting out as a Product Designer'
                              p='Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.'
                              articleImage={articlePic} />
                          <Article
                              author='Oluwatobi Ogunniyi'
                              authorImage={white_guy}
                              date='May 22nd, 2023'
                              role='Software developer'
                              title='Use CSS Selectors'
                              p='Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages'
                              articleImage={CSS} />
                          <Article
                              author='Adebobola Muhydeen'
                              authorImage={manGlasses}
                              date='May 23rd, 2023'
                              role='Political analyst'
                              title='The Impact of social media on Political discourse'
                              p='In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world'
                              articleImage={CSS} />
                          <div></div>
                      </section>
                  </section>
                  
              </div>
  )
}

export default FeedComponent