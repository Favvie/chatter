import React from 'react'
import Image from 'next/image'

import arrow from '../../../public/uparrow.svg'
import feed from '../../../public/icons/feed.svg'
import bookmark from '../../../public/icons/Bookmark.svg'
import team from '../../../public/icons/team.svg'
import drafts from '../../../public/icons/drafts.svg'
import analytics from '../../../public/icons/analytics.svg'
import account from '../../../public/icons/account.svg'
import notif from '../../../public/icons/notif.svg'
import search from '../../../public/icons/search.svg'
import read from '../../../public/icons/read.svg'
import chat from '../../../public/icons/chat.svg'
import heart from '../../../public/icons/heart.svg'
import outline_analytics from '../../../public/icons/outline-analytics.svg'

import manGlasses from '../../../public/man_in_glasses.png'
import white_guy from '../../../public/white_guy.png'
import lady from '../../../public/lady.png'
import articlePic from '../../../public/articlePic.png'
import CSS from '../../../public/css.png'

import Article from '@/components/article'

const page = () => {
  return (
      <div className=''>
        <div className='h-screen fixed pl-[72px] border border-[#D0D0D0] overflow-y-scroll'>
            <h1 className='font-medium text-3xl text-primary uppercase py-3 pr-[56px]'>Chatter</h1>
          <h3 className='text-[#111111] py-3 text-lg'>Overview</h3>
          <ul className='pl-[23px]'>
              <li className='text-[#626262]  py-3 flex gap-x-3'><Image src={feed} alt='feed icon'/> Feed</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'> <Image src={bookmark} alt='bookmark icon'/>Bookmarks</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'><Image src={team} alt='team icon'/>Team blogs</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'><Image src={drafts} alt='drafts icon'/> Drafts</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'><Image src={analytics} alt='analytics icon'/>Analytics</li>
          </ul>

          <h3 className='text-[#111111] py-3 text-lg flex gap-x-5'>
                  Trending Tags
                  <Image src={arrow} alt='arrow icon'/>
          </h3>
          <ul className='pl-[23px]'>
              <li className='text-[#626262]  py-3 flex gap-x-3'>Programming</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'>Data Science</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'>Technology</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'>Machine learning</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'>Politics</li>
              <li className='text-primary  py-3 flex gap-x-3'>See all</li>
          </ul>
          <h3 className='text-[#111111] py-3 text-lg'>Personal</h3>
          <ul>
              <li className='text-[#626262]  py-3 flex gap-x-3'><Image src={account} alt='account icon'/>Account</li>
              <li className='text-[#626262]  py-3 flex gap-x-3'><Image src={notif} alt='notif icon'/>Notifications</li>
              <li className='text-[#FF1400]  py-3 flex gap-x-3'>Log out</li>

              </ul>
          </div>
          <div className='ml-[294px]'>
            <div className=' grid grid-cols border border-[#d0d0d0] p-2'>
                
                <div className='col-start-6 flex gap-x-9 border border-[#d0d0d0] rounded-lg p-3 w-[459px]'>
                    <Image src={search} alt='search icon' />
                    <input type="text" placeholder='search chatter' className='placeholder:text-lg' />
                    </div>
                <div className='col-start-10 flex items-center space-x-4'>
                    <Image src={notif} alt='notif icon' className='text-black' />
                    <div className='w-[48px] h-[48px] rounded-full'><Image src={manGlasses} alt='white guy in glasses' className='w-full h-full rounded-full'/></div>
            </div>
              </div>
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
          </div>
      </div>
      
  )
}

export default page