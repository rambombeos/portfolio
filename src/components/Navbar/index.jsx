import { LogoDev } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { NavbarWrapper } from './style';

const Navbar = () => {
    return (
        <NavbarWrapper className="`navbar` +constant" >
            <Box sx={{ flexGrow: 1, background: 'black' }}>
                <AppBar position='static' sx={{ background: '#222222', position: 'absolute', }}>
                    <Toolbar>
                        <IconButton
                            size="large" App
                            edge="start"
                            color="inherit"
                            aria-label='menu'
                            sx={{ mr: 2 }}
                        >
                            <LogoDev />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Home
                        </Typography>
                        <Button color="inherit" sx={{ border: '1px solid gray' }}>Contact</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </NavbarWrapper>
    )
}

export default Navbar