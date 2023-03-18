import React from 'react'
import Content from '../content/Content'
import Footer from '../footer/Footer'
import HeaderLandingPage from '../header/HeaderLandingPage'
import Jumbotron from '../jumbotron/Jumbotron'
import './Landing.css'

const LandingPage = () => {
  return (
    <div>
      <HeaderLandingPage />
      <Jumbotron />
      <Content />
      <Footer />
    </div>
  )
}

export default LandingPage
