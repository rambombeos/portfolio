import { LogoDev } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Box sx={{ flexGrow: 1, background: 'black' }}>
                    <AppBar position='static' sx={{ background: '#222222' }}>
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
            </div>
        </>
    )
}

export default Navbar