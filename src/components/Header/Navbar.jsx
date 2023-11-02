import { AppBar, Button, Grid, Tab, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavbarWrapper, StyledTabs } from './style';

export const Navbar = () => {
    const [value, setValue] = useState(0);
    // Add a function to scroll to a section
    const scrollToSection = (ref) => {
        console.log(ref)
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <NavbarWrapper>
            <AppBar >
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2}>
                            {/* <IconButton sx={{ width: '80px' }}> */}
                            {/* <img src={designPicImage} alt="Design Pic" /> */}
                            <Typography variant='h4' color={'primary'}>Rambs<span style={{ color: 'var(--secondary)' }}>Dev</span></Typography>
                            {/* </IconButton> */}
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', }}>

                            <StyledTabs
                                value={value}
                                onChange={(e, value) => {
                                    setValue(value);
                                    // Use the scrollToSection function to scroll to the desired section
                                    switch (value) {
                                        case 0:
                                            scrollToSection('heroRef');
                                            break;
                                        case 1:
                                            scrollToSection(aboutRef);
                                            break;
                                        case 2:
                                            scrollToSection(portfolioRef);
                                            break;
                                        case 3:
                                            scrollToSection(contactRef);
                                            break;
                                        // Add cases for other sections as needed
                                        default:
                                            break;
                                    }
                                }}
                                indicateColor='secondary'
                            >
                                <Tab label="Home" />
                                <Tab label="About" />
                                <Tab label="Portfolio" />
                                <Tab label="Services" />
                            </StyledTabs>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                            <Button variant='outlined' sx={{ marginLeft: 'auto' }}>Contact</Button>

                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    )
}
