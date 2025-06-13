import React from 'react'
import Hero from '@/sections/hero/Hero'
import { KeyFeatures } from '@/sections/features/Features'
import { Clients } from '@/sections/our-clients/Clients'
import { OurTeam } from '@/sections/out-team/OurTeam'
import { ContactUs } from '@/sections/contact-us/Contact'
import Faq from '@/sections/faq/Faq'
import OtherProducts from '@/sections/other-products/OtherProducts'
import MarketingSection from '@/sections/marketing/MarketingSection'
import Stats from '@/sections/stats/Stats'
import Content from '@/sections/content/Content'
import Support from '@/sections/support/Support'
import CustomerReviews from '@/sections/customer-reviews/CustomerReviews'
import ProblemSolution from '@/sections/problem-solution/ProblemSolution'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <KeyFeatures />
      <Clients />
      <ProblemSolution />
      {/* <Stats /> */}
      <MarketingSection />
      <Content />
      <OurTeam />
      <OtherProducts />
      <Faq />
      <Support />
      <CustomerReviews />
      <ContactUs />

    </div>
  )
}

export default Home