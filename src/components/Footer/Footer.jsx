import React from 'react';
// Import the image
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import designPcImage from '../../assets/img/logo.svg';
import { FooterWrapper } from './style';

export const Footer = () => {
    return (
        <FooterWrapper id='footer'>
            <Grid container >
                <Grid item xs={4} sx={{ padding: '40px 0' }}>
                    <img style={{ width: '60%', margin: '0 auto' }} src={designPcImage} alt='Design PC' />
                </Grid>
                <Grid container item xs={8} sx={{ padding: '20px 20px 0' }}>
                    <Grid item xs={3}>
                        <Typography variant='h5' color='var(--white-darker)'>Navigation</Typography>
                        <Button color='secondary' sx={{ display: 'block' }}>Home</Button>
                        <Button color='secondary' sx={{ display: 'block' }}>About</Button>
                        <Button color='secondary' sx={{ display: 'block' }}>Portfolio</Button>
                        <Button color='secondary' sx={{ display: 'block' }}>Services</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='h5' color='var(--white-darker)'>Social</Typography>
                        <Button sx={{ display: 'flex' }} onClick={() => { window.open('https://www.facebook.com/devrambs/') }}>
                            <Facebook color='secondary' sx={{ marginRight: '.5rem' }} /><Typography color='var(--white-darker)' sx={{ display: 'flex', textTransform: 'none', fontSize: '.9rem' }}>Facebook</Typography></Button>
                        <Button sx={{ display: 'flex' }} onClick={() => { window.open('https://www.instagram.com/devrambs/') }}>
                            <Instagram color='secondary' sx={{ marginRight: '.5rem' }} /><Typography color='var(--white-darker)' sx={{ display: 'flex', textTransform: 'none', fontSize: '.9rem' }}>Instagram</Typography></Button>
                        <Button sx={{ display: 'flex' }} onClick={() => { window.open('https://twitter.com/rambsdev') }}>
                            <Twitter color='secondary' sx={{ marginRight: '.5rem' }} /><Typography color='var(--white-darker)' sx={{ display: 'flex', textTransform: 'none', fontSize: '.9rem' }}>Twitter</Typography></Button>
                        <Button sx={{ display: 'flex' }} onClick={() => { window.open('https://www.youtube.com/@rambsdev') }}>
                            <YouTube color='secondary' sx={{ marginRight: '.5rem' }} /><Typography color='var(--white-darker)' sx={{ display: 'flex', textTransform: 'none', fontSize: '.9rem' }}>YouTube</Typography></Button>
                        <Button sx={{ display: 'flex' }} onClick={() => { window.open('https://www.linkedin.com/in/rambombeo/') }}>
                            <LinkedIn color='secondary' sx={{ marginRight: '.5rem' }} /><Typography color='var(--white-darker)' sx={{ display: 'flex', textTransform: 'none', fontSize: '.9rem' }}>LinkedIn</Typography></Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='h5' color='var(--white-darker)'>Contact</Typography>
                        <Typography color='secondary'>Address: <span style={{ color: 'var(--white-darker)', fontSize: '.9rem' }}>Misamis Oriental, Philippines</span></Typography>
                        <Typography color='secondary'>Email: <span style={{ color: 'var(--white-darker)', fontSize: '.9rem' }}>rambombeos@gmail.com</span></Typography>
                        <Typography color='secondary'>Phone: <span style={{ color: 'var(--white-darker)', fontSize: '.9rem' }}>(088) 557-0069</span></Typography>

                    </Grid>

                </Grid>
            </Grid>
        </FooterWrapper>
    )
}
