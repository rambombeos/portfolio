import React from 'react';
import { useDispatch } from 'react-redux';
import { scroller } from 'react-scroll';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Header/Navbar';
import { About } from '../../components/Section/AboutSection/About';
import { Contact } from '../../components/Section/ContactSection/Contact';
import { Hero } from '../../components/Section/HeroSection/Hero';
import { Portfolio } from '../../components/Section/Portfolio/Portfolio';
import { fetchTab } from '../../feature/slice/tab';
import { HomepageWrapper } from './style';

function Homepage() {
    const dispatch = useDispatch()

    const scrollToSection = (sectionId, offset = 0) => {
        const sectionIdToTabMapping = {
            'hero-section': 0,
            'about-section': 1,
            'portfolio-section': 2,
        };

        const tab = sectionIdToTabMapping[sectionId];

        if (typeof tab !== 'undefined') {
            dispatch(fetchTab(tab));
        }else{
            dispatch(fetchTab(0))
        }

        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset,
        });
    };



    return (
        <HomepageWrapper>
            <Navbar scrollToSection={scrollToSection} />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer scrollToSection={scrollToSection} />
        </HomepageWrapper>
    )
}

export default Homepage
