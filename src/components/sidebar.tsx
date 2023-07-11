'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'

import Link from 'next/link'
import { useAuthState } from "react-firebase-hooks/auth";

import arrow from '../../public/uparrow.svg'
import feed from '../../public/icons/feed.svg'
import bookmark from '../../public/icons/Bookmark.svg'
import team from '../../public/icons/team.svg'
import drafts from '../../public/icons/drafts.svg'
import analytics from '../../public/icons/analytics.svg'
import account from '../../public/icons/account.svg'
import notif from '../../public/icons/notif.svg'

import {auth, logout} from '../../src/services/firebase'
import { useRouter } from 'next/navigation'


const Sidebar = () => {
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) return router.push("/");
  }, [user, loading, router]);

  return (
    <div className=' pl-[72px] border border-[#D0D0D0] '>
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
              <li className='text-[#FF1400]  py-3 flex gap-x-3' onClick={() => logout()}>Log out</li>

              </ul>
          </div>
  )
}

export default Sidebar