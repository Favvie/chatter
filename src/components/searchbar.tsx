import React from 'react'
import Image from 'next/image'

import manGlasses from '../../public/man_in_glasses.png'
import notif from '../../public/icons/notif.svg'
import search from '../../public/icons/search.svg'

const Searchbar = () => {
  return (
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
  )
}

export default Searchbar