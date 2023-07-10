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
import Sidebar from '@/components/sidebar'
import Searchbar from '@/components/searchbar'
import FeedComponent from '@/components/feed'

const page = () => {
  return (
      <div>
            <FeedComponent />
      </div>
      
  )
}

export default page