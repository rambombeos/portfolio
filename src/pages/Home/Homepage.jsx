import React, { useRef } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { About } from '../../components/Section/AboutSection/About'
import { Contact } from '../../components/Section/ContactSection/Contact'
import { Hero } from '../../components/Section/HeroSection/Hero'
import { Portfolio } from '../../components/Section/Portfolio/Portfolio'
import { HomepageWrapper } from './style'

function Homepage() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    return (
        <HomepageWrapper>
            <Header />
            <Hero ref={heroRef}/>
            <About ref={aboutRef}/>
            <Portfolio ref={portfolioRef}/>
            {/* <Services /> */}
            <Contact ref={contactRef}/>
            {/* <Test /> */}
            <Footer />
        </HomepageWrapper>
    )
}

export default Homepage
