import React from 'react'
import Hero from '@/sections/hero/Hero'
import { KeyFeatures } from '@/sections/features/Features'
import { Clients } from '@/sections/our-clients/Clients'
import { OurTeam } from '@/sections/out-team/OurTeam'
import { ContactUs } from '@/sections/contact-us/Contact'
import Faq from '@/sections/faq/Faq'
import OtherProducts from '@/sections/other-products/OtherProducts'
import MarketingSection from '@/sections/marketing/MarketingSection'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero/>
      <KeyFeatures/>
      <Clients/>
      <OurTeam/>
      <MarketingSection/>
      <ContactUs/>
      <OtherProducts/>
      <Faq/>
    </div>
  )
}

export default Home