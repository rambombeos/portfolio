import { Grid } from '@mui/material'
import React from 'react'
import { TestWrapper } from '../style'

export const Test = () => {
    return (
        <TestWrapper>
            <Grid container>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <ExpandableCard /> */}
                </Grid>
            </Grid>
        </TestWrapper>
    )
}
