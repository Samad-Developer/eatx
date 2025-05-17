import Hero from '@/components/sections/hero/Hero'
import MobileMockupShowcase from '@/components/sections/mockup-showcase/MobileMockupShowcase'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero/>
      <MobileMockupShowcase/>
      <div className='w-full py-96'></div>
    </div>
  )
}

export default Home