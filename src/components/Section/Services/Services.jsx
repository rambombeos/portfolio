import { DesignServices } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ServicesWrapper } from '../style'

export const Services = () => {
    return (
        <ServicesWrapper elevation={0}>
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center', }}>
                    <Typography color='primary' variant='h3' m={5}>SERVICES</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <DesignServices sx={{ fontSize: '20rem' }} /> {/* Adjust the font size as needed */}
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center', }}>
                    <Typography color='primary' variant='h4' m={5}>Tech Stack</Typography>
                    <Typography>React</Typography>
                    <Typography>HTML</Typography>
                    <Typography>CSS</Typography>
                </Grid>
            </Grid>
        </ServicesWrapper>
    )
}
