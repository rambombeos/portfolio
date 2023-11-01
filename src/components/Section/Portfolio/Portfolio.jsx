import { Grid, Typography } from '@mui/material'
import React from 'react'
import { PortfolioWrapper } from '../style'

export const Portfolio = () => {
    return (
        <PortfolioWrapper>
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center', }}>
                    <Typography variant='h3' m={5}>PORTFOLIO</Typography>
                </Grid>
            </Grid>
        </PortfolioWrapper>
    )
}
