import React from 'react'
import { Header } from '../../components/Header/Header'
import { HomepageWrapper, PageWrapper } from './style'
import { Hero } from '../../components/Section/HeroSection/Hero'
import { About } from '../../components/Section/AboutSection/About'

function Homepage() {
    return (
        <HomepageWrapper>
            <Header />
            <Hero />
            <About />
        </HomepageWrapper>
    )
}

export default Homepage
