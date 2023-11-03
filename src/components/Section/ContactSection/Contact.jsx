import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ContactForm } from '../../Form/ContactForm'
import { ContactWrapper } from '../style'

export const Contact = () => {
    return (
        <ContactWrapper  id='contact-section'>
            <Grid container >
                <Grid item xs={6} sx={{ textAlign: 'left', padding: '0 30px'}}>
                    <Typography color='primary' variant='h3' >CONTACT</Typography>
                    <Typography >Please reach out to me via email or phone, and we’ll be happy to address your questions and provide the necessary guidance.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </ContactWrapper>
    )
}
