import { AppBar, Button, Grid, IconButton, Paper, Tab, Tabs, Toolbar } from '@mui/material';
import React from 'react';
import { NavbarWrapper } from './style';
import designPicImage from '../../assets/img/design-pic.jpg';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <AppBar sx={{ background: '#222222', }}>
                <Toolbar>
                    <IconButton sx={{ width: '80px' }}>
                        <img src={designPicImage} alt="Design Pic" />
                    </IconButton>
                    <Tabs textColor='inherit' sx={{color: 'var(--primary-light)'}}>
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Portfolio" />   
                        <Tab label="Services" />
                    </Tabs>
                    <Button variant='outlined' sx={{ marginLeft: 'auto' }}>Contact</Button>
                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    )
}
