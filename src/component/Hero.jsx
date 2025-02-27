import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'



export default function Hero() {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 ' >
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className='flex flex-col items-center uppercase'>
          <div>
            <div>New Trend</div>
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light'>
            AUTUMN SALE STYLISH
            <span className='font-semibold'>WOMENS</span>
          </h1>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}
