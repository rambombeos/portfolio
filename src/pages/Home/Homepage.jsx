import React from 'react';
import { scroller } from 'react-scroll';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Header/Navbar';
import { About } from '../../components/Section/AboutSection/About';
import { Contact } from '../../components/Section/ContactSection/Contact';
import { Hero } from '../../components/Section/HeroSection/Hero';
import { Portfolio } from '../../components/Section/Portfolio/Portfolio';
import { HomepageWrapper } from './style';

function Homepage() {
    const scrollToSection = (sectionId, offset = 0) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset,
        });
    };


    return (
        <HomepageWrapper>
            <Navbar scrollToSection={scrollToSection}/>
            <Hero />
            <About />
            <Portfolio />
            {/* <Services /> */}
            <Contact />
            {/* <Test /> */}
            <Footer scrollToSection={scrollToSection}/>
        </HomepageWrapper>
    )
}

export default Homepage
