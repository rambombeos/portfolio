// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const ContactForm = () => {
    const [isSubmit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true)
        // Handle form submission, e.g., send data to your backend or perform any desired action.
        // console.log(formData);

    };

    return (
        <Paper maxWidth="sm" elevation={6} sx={{ padding: '30px' }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button disabled={(isSubmit ? true : false)} fullWidth type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                        {
                            isSubmit &&
                            <Typography
                                m={1}
                                variant='h6'
                                textAlign='justified'
                                fontSize={'.8rem'}
                                color=' #FF6B6B'>
                                * Thank you for submitting your information. We are currently in the process of working on this form. If you have any inquiries, please feel free to send an email directly to rambombeos@gmail.com. Your cooperation is greatly appreciated.
                            </Typography>
                        }
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

