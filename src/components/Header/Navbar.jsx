import { AppBar, Button, Grid, Tab, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavbarWrapper, StyledGrid, StyledTabs } from './style';
export const Navbar = ({ scrollToSection }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0);
    const tabData = useSelector((state) => state.tab.data);
    const theme = useTheme(); // Get the theme object

    // Use theme breakpoints for media queries
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Use 'sm' breakpoint from the theme
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(() => {
        setValue(tabData.value)
    }, [tabData]);

    return (
        <NavbarWrapper>
            <AppBar >
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12} md={2}>
                            <Typography sx={{ cursor: 'pointer' }} variant='h4' color={'primary'} onClick={() => scrollToSection('hero-section', 0)}>Rambs<span style={{ color: 'var(--secondary)' }}>Dev</span></Typography>
                        </Grid>
                        {(!isSmallScreen && !isMediumScreen) &&
                            <>
                                <StyledGrid item xs={6}>
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
                                    >
                                        <Tab label="Home" />
                                        <Tab label="About" />
                                        <Tab label="Projects" />
                                    </StyledTabs>
                                </StyledGrid>
                            </>
                        }
                        <Grid item xs={1} />
                        {(!isSmallScreen && !isMediumScreen) &&
                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                                <Button variant='outlined' sx={{ marginLeft: 'auto' }} onClick={() => scrollToSection('contact-section', -50)}>Contact</Button>
                            </Grid>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </NavbarWrapper >
    )
}
