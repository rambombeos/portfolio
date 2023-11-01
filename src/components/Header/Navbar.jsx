import { AppBar, Button, Grid, Tab, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavbarWrapper, StyledTabs } from './style';

export const Navbar = () => {
    const [value, setValue] = useState(0);

    return (
        <NavbarWrapper>
            <AppBar >
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2}>
                            {/* <IconButton sx={{ width: '80px' }}> */}
                            {/* <img src={designPicImage} alt="Design Pic" /> */}
                            <Typography variant='h4' color={'primary'}>Rambs<span style={{color:'var(--secondary)'}}>Dev</span></Typography>
                            {/* </IconButton> */}
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', }}>

                            <StyledTabs
                                value={value}
                                onChange={(e, value) => setValue(value)}
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
