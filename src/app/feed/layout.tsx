import '../../app/globals.css'
import { DM_Sans } from 'next/font/google'

import Sidebar from '@/components/sidebar'
import Searchbar from '@/components/searchbar'
import FeedComponent from '@/components/feed'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Feed',
  description: 'Feed section',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <body className={dmSans.className}>
              <div className='flex w-full'>
                <Sidebar />
                <div>
                    <Searchbar />
                    {children}
                    {/* <FeedComponent /> */}
                </div>
            </div>

          </body>
    </html>
  )
}
