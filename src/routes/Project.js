import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import WorkCard from '../components/WorkCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent work"/>
      <Work />
      <Footer />

    </div>
  )
}

export default Project