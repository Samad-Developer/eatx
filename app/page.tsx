import React from 'react'
import Hero from '@/sections/hero/Hero'
import { KeyFeatures } from '@/sections/features/Features'
import { Clients } from '@/sections/our-clients/Clients'
import { OurTeam } from '@/sections/out-team/OurTeam'
import { ContactUs } from '@/sections/contact-us/Contact'
import Faq from '@/sections/faq/Faq'
import OtherProducts from '@/sections/other-products/OtherProducts'
import MarketingSection from '@/sections/marketing/MarketingSection'
import Content from '@/sections/content/Content'
import Support from '@/sections/support/Support'
import CustomerReviews from '@/sections/customer-reviews/CustomerReviews'
import ProblemSolution from '@/sections/problem-solution/ProblemSolution'
import Footer from '@/components/footer/Footer'

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. Hook + First Impression */}
      <Hero />

      {/* 2. Build Credibility Early */}
      <Clients />

      {/* 3. Show Key Benefits Immediately */}
      <KeyFeatures />

      {/* 4. Address Their Problem, Then Your Solution */}
      <ProblemSolution />

      {/* 5. Explain How You Market/Deliver (Trust & Reach) */}
      <MarketingSection />

      {/* 6. Show Active Support + Workflow Confidence */}
      <Support />

      {/* 7. Highlight the Human Behind the Product */}
      <OurTeam />

      {/* 8. Provide Value-Driven Educational or Interactive Content */}
      {/* <Content /> */}

      {/* 9. Cross-sell Other Relevant Products/Modules */}
      <OtherProducts />

      {/* 10. Overcome Objections with FAQs */}
      <Faq />

      {/* 11. Social Proof (Testimonials After Objections) */}
      <CustomerReviews />

      {/* 12. Clear Final CTA */}
      <ContactUs />

      {/* Footer */}
      <Footer/>
    </div>

  )
}

export default Home