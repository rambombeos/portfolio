import React from 'react'
import { Header } from '../../components/Header/Header'
import { About } from '../../components/Section/AboutSection/About'
import { Hero } from '../../components/Section/HeroSection/Hero'
import { Portfolio } from '../../components/Section/Portfolio/Portfolio'
import { Services } from '../../components/Section/Services/Services'
import { HomepageWrapper } from './style'

function Homepage() {
    return (
        <HomepageWrapper>
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Services />
            {/* <Test /> */}
        </HomepageWrapper>
    )
}

export default Homepage
