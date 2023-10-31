import React from 'react'
import { AboutWrapper } from '../style'
import { Grid } from '@mui/material'

export const About = () => {
    return (
        <AboutWrapper>
            <Grid container>
                <Grid item xs={6} sx={{ outline: '1px solid red' }}>
                    THis will my picture
                </Grid>
                <Grid item xs={6} sx={{ outline: '1px solid red' }}>This will be my deescription</Grid>
            </Grid>
        </AboutWrapper>
    )
}
