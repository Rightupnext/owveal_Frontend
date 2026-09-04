import React from 'react'
import Banner from "../Banner"
import Passion from "../PassionPrecisionSection"
import OurExpertiseSection from '../OurExpertiseSection'
import SuccessStoriesSection from '../SuccessStoriesSection'
import OurTeamSection from '../OurTeamSection'
import OurProductsSection from '../OurProductsSection'
import Footer from '../Footer'
import WhatsAppFloatingButton from '../WhatsAppFloatingButton'
import CaseStudySection from '../CaseStudySection'
import ClientsSection from '../ClientsSection'
import Header from '../Header'

const Home = () => {
  return (
    <>
 {/* <Header /> */}
<Banner />
<Passion />
<OurExpertiseSection />
<ClientsSection />
<SuccessStoriesSection />
<OurTeamSection />
<CaseStudySection />
<OurProductsSection />
{/* <Footer /> */}



    </>
  )
}

export default Home