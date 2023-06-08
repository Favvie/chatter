import React from 'react'
import Image from 'next/image'

import read from '../../public/icons/read.svg'
import chat from '../../public/icons/chat.svg'
import heart from '../../public/icons/heart.svg'
import outline_analytics from '../../public/icons/outline-analytics.svg'

import manGlasses from '../../public/white_guy.png'
import lady from '../../public/lady.png'
import articlePic from '../../public/articlePic.png'

const Article = ({authorImage, author, role, date, title, p, articleImage}) => {
  return (
    <div className='px-14 py-4 border-t border-b-[#d0d0d0]'>
                              <div className='flex space-x-3'>
                                  <div className='rounded-full w-24 h-24'>
                                  <Image src={authorImage} alt='lady smiling at the camera' className='rounded-full'/>
                                      
                                  </div>

                                  <div className='self-center'>
                  <h3 className='font-bold text-2xl text-[#111111] pb-2'>{author}</h3>
                  <p className='text-lg text-[#626262]'>{role} <span>{date}</span></p>
                                  </div>
                              </div>
                              <h1 className='font-bold text-3xl py-2 text-[#111111]'>{title}</h1>
                              <span className='text-[#626262] text-base flex py-2'><Image src={read} alt='read time icon' className='mr-2' /> 10 mins read</span>
                              <p className='text-lg text-[#626262]'>
                                  {p}
                              </p>
                              <Image src={articleImage} alt='a laptop,a mouse and a ipad with wireframes on the screen' className='rounded-lg my-3' />
                              <div className='text-[#626262] text-base flex items-center justify-between pb-4'>
                                  <span className='flex gap-x-2'><Image src={chat} alt='chat icon'/>200</span>
                                  <span className='flex gap-x-2'><Image src={heart} alt='like icon'/>120</span>
                                  <span className='flex gap-x-2'><Image src={outline_analytics} alt='analytics icon'/>2980 views</span>
                              </div>
                          </div>
  )
}

export default Article