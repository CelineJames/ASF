import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import WhySection from './components/WhySection/WhySection'
import JoinCommunity from './components/JoinCommunity/JoinCommunity'
import DownloadResources from './components/DownloadResources/DownloadResources'
import SubmitDocument from './components/SubmitDocument/SubmitDocument'
import WhatWeReview from './components/WhatWeReview/WhatWeReview'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <JoinCommunity />
        <DownloadResources />
        <SubmitDocument />
        <WhatWeReview />
      </main>
      <Footer />
    </>
  )
}

export default App
