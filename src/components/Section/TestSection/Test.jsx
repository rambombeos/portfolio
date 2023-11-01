import React from 'react'
import { TestWrapper } from '../style'
import { CardC } from '../../Card/Card'
import { Grid } from '@mui/material'
import CardWithCoveringDrawer from '../../Card/CardD'
import ExpandableCard from '../../Card/CardE'

export const Test = () => {
    return (
        <TestWrapper>
            <Grid container>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ExpandableCard />
                </Grid>
            </Grid>
        </TestWrapper>
    )
}
