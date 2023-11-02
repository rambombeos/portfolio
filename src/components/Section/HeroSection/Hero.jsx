import { Typography } from '@mui/material'
import React from 'react'
import { HeroWrapper } from '../style'
// import { HeroWrapper } from './style'


export const Hero = () => {
    return (
        <HeroWrapper>
            <Typography variant='h3' color='secondary'>Hi! I am </Typography>
            <Typography variant='h1' color='primary'>Rab Michael</Typography>
            <Typography variant='h2' color='var(--alternate)'>Web Developer</Typography>
        </HeroWrapper >
    )
}
