import React from 'react'
import './content.css'
import Link from 'next/link'
const Maincontent = () => {
 
  return (
    <>
        <div className=' bg-amber-300 w-300 h-auto rounded-3xl relative '>
            <video className="rounded-3xl" muted autoPlay loop >
                <source src='/video/woori_ad.mp4' type='video/mp4'/>
            </video>
          <div className='content-box bg-white w-100 h-30 bottom-0 left-0 border-gray-200 rounded-tr-3xl absolute flex items-center'>
            <div className='flex justify-start items-end w-full h-full'>
                <Link href="/posts/write">
            <button class="cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500  underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-700 h-20 w-90 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
                글 작성하러 가기
            </button>
            </Link>
            </div>

        </div>
    
          </div>

    </>
  )
}

export default Maincontent