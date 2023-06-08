import Image from 'next/image'
import about from '../../public/about.png'
import analytics from '../../public/carbon_analytics.svg'
import content from '../../public/content.svg'
import people from '../../public/people.svg'
import Review from '../../public/review.png'

import whiteGuy from '../../public/white_guy.png'
import Lady from '../../public/lady.png'
import manGlasses from '../../public/man_in_glasses.png'

export default function Home() {
  return (
    <>
      <header className='bg-white w-[90%] mx-auto flex justify-between items-center py-4'>
        <h1 className='text-primary font-bold text-5xl uppercase'>chatter</h1>
        <nav className='flex gap-x-6 font-bold '>
          <p>Home</p>
          <p>About us</p>
          <p>Contact</p>
          <p>Blogs</p>
        </nav>

        <div className='mt-1 '>
          <button className='border border-primary rounded-lg font-bold py-3 px-12 mr-7'>Log in</button>
          <button className='bg-primary text-white py-4 px-11 rounded-lg font-bold'>Sign up</button>
        </div>
    </header>
      <main className="">
        <section className='bg-landing bg-center bg-cover bg-no-repeat h-[100vh] text-white w-full flex items-center justify-center flex-col'>
          <div className='flex flex-col w-[70%] mx-auto gap-y-9'>

          <h2 className='font-bold text-5xl'>Welcome to Chatter: A Haven for Text-Based Content</h2>
          <p className='text-2xl font-medium'>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
          <button className='self-start bg-primary font-bold py-3 px-8 rounded-lg'>Get started</button>
          </div>
        </section>
        <section className='flex justify-between w-[90%] mx-auto py-24 gap-x-10'>
          <div className='flex-1'>
          <h2 className='font-bold text-5xl mb-9'>About Chatter</h2>
<p>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
          </div>
          <div className='flex-1'>
            <Image alt='people sitting and facing their gadgets' src={ about} />
          </div>
        </section>

        <section className='w-[75%] mx-auto'>
          <h2 className='font-bold text-5xl text-center py-6'>Why you should join chatter</h2>
          <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</p>
          <div className='grid grid-cols-3 gap-x-10 my-14 w-[95%] mx-auto'>
            <div className='border border-[#D0D0D0] rounded-lg p-4 space-y-2'>
              <div className='rounded-full bg-[#d6d1f8] bg-opacity-20 w-[92px] h-[88px] flex items-center justify-center'>
                <Image src={analytics} alt='analytics icon'/>
              </div>
              <h3 className='font-medium text-2xl'>Analytics</h3>
              <p className='text-[#626262]'>Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time</p>
            </div>
            <div className='border border-[#D0D0D0] rounded-lg p-4 space-y-2'>
              <div className='rounded-full bg-[#d6d1f8] bg-opacity-20 w-[92px] h-[88px] flex items-center justify-center'>
                <Image src={people} alt='analytics icon'/>
              </div>
              <h3 className='font-medium text-2xl'>Social interaction</h3>
              <p className='text-[#626262]'>Users on the platform can interact with posts they like, comment and engage in discussions</p>
            </div>
            <div className='border border-[#D0D0D0] rounded-lg p-4 space-y-2'>
              <div className='rounded-full bg-[#d6d1f8] bg-opacity-20 w-[92px] h-[88px] flex items-center justify-center'>
                <Image src={content} alt='analytics icon'/>
              </div>
              <h3 className='font-medium text-2xl'>Content Creation</h3>
              <p className='text-[#626262] mr-[33px]'>Write nice and appealing with our in-built markdown, a rich text editor</p>
            </div>
          </div>
        </section>
        <section className='bg-[#FFEDCC] bg-opacity-50    h-[50vh]'>
          <div className='w-[80%] mx-auto flex  h-full items-center px-14 gap-x-10'>

          <div className='rounded-full'>
            <Image src={Review} alt='adebobola' className='rounded-full'/>
          </div>
            <div className='space-y-4'>
            <p>Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.</p>
            <p className='font-bold text-2xl'>Adebobola Muhydeen,<span className='font-normal text-sm'>  Software developer at Apple </span></p>
            <button className='self-start bg-primary font-bold py-3 px-8 rounded-lg text-white'>Join chatter</button>
          </div>
          </div>
        </section>
        <section className='flex w-[80%] mx-auto py-20'>
          <div className='flex'>
            <div className='rounded-full'>
              <Image src={Lady} alt='a woman' className='rounded-full'/>
            </div>
            <div className='rounded-full'>
              <Image src={manGlasses} alt='man facing the camera' className='rounded-full'/>
            </div>
            <div className='rounded-full'>
              <Image src={whiteGuy} alt='a smiling man' className='rounded-full'/>
            </div>
          </div>
          <div className='space-y-3 w-[60%]'>
          <h2 className='font-bold text-5xl leading-[150%]'>Write, read and connect with great minds on chatter</h2>
          <p>Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals  </p>
          <button className='self-start bg-primary font-bold py-3 px-8 rounded-lg text-white'>Get Started</button>
          </div>
        </section>
      </main>
      <footer className='bg-[#FFEDCC] bg-opacity-50 py-16'>
        <div className='flex w-[80%] mx-auto justify-between'>

          <h1 className='text-primary font-bold text-5xl uppercase'>chatter</h1>
          {/* <div className='grid grid-cols-3 w-full'> */}

          
        <div className='space-y-4'>
          <h3 className='font-medium text-2xl text-black'>Explore</h3>
          <div>community</div>
          <div>Trending blogs</div>
          <div>Chatter for teams</div>
        </div>
        <div  className='space-y-4'>
          <h3 className='font-medium text-2xl text-black'>Explore</h3>
          <div>community</div>
          <div>Trending blogs</div>
          <div>Chatter for teams</div>
        </div>
        <div  className='space-y-4'>
          <h3 className='font-medium text-2xl text-black'>Explore</h3>
          <div>community</div>
          <div>Trending blogs</div>
          <div>Chatter for teams</div>
          </div>
        </div>  
        {/* </div> */}
      </footer>
    </>
  )
}
