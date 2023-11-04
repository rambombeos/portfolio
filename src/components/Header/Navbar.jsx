import { AppBar, Button, Grid, Tab, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavbarWrapper, StyledTabs } from './style';

export const Navbar = ({ scrollToSection }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0);
    const tabData = useSelector((state) => state.tab.data);

    useEffect(() => {
        // dispatch(fetchTab(0))
        setValue(tabData.value)
    }, [tabData]);

    return (
        <NavbarWrapper>
            <AppBar >
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography sx={{ cursor: 'pointer' }} variant='h4' color={'primary'} onClick={() => scrollToSection('hero-section', 0)}>Rambs<span style={{ color: 'var(--secondary)' }}>Dev</span></Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', }}>
                            <StyledTabs
                                value={value}
                                onChange={(e, value) => {
                                    setValue(value);
                                    if (value === 0) {
                                        scrollToSection('hero-section', 0);
                                    } else if (value === 1) {
                                        scrollToSection('about-section', -50); // Add an offset to scroll above the "About" section
                                    } else if (value === 2) {
                                        scrollToSection('portfolio-section', -50);
                                    } else if (value === 3) {
                                        scrollToSection('experience-section', -50);
                                    }
                                }}
                            // indicateColor='secondary'
                            >
                                <Tab label="Home" />
                                <Tab label="About" />
                                <Tab label="Projects" />
                                {/* <Tab label="Services" /> */}
                            </StyledTabs>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                            <Button variant='outlined' sx={{ marginLeft: 'auto' }} onClick={() => scrollToSection('contact-section', -50)}>Contact</Button>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    )
}
