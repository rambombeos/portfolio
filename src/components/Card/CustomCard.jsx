
/** @jsxImportSource @emotion/react */
import { Button, Card, CardContent, CardMedia, Collapse, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CardWrapper, DrawerCardWrapper } from './style';

export const randomDescription = ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto sapiente? Magni saepe, deserunt officiis adipisci et fugit sequi cupiditate.')

export const CustomExpandableCard = (props) => {
    const { 
        image, 
        title, 
        link, 
        codeLink, 
        linkDisabled, 
        codeLinkDisabled, 
        websiteTitle,
        description,
    } = props
    const [expanded, setExpanded] = useState(true);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };


    return (
        <CardWrapper>
            <Card
                onMouseEnter={handleToggleExpand}
                onMouseLeave={handleToggleExpand}
            >
                <Collapse in={expanded}>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, architecto sapiente? Magni saepe, deserunt officiis adipisci et fugit sequi cupiditate.</p> */}
                    <DrawerCardWrapper elevation={5}>
                        <CardMedia
                            backgroundSize='cover'
                            width={'100%'}
                            component="img"
                            height="194"
                            image={image}
                            alt="website"
                        />
                        <CardContent>
                            <Typography variant='h4' sx={{ textAlign: 'center', }}>{title}</Typography>
                        </CardContent>
                    </DrawerCardWrapper>
                </Collapse>
                <Collapse in={!expanded} sx={{ background: '#333' }}>
                    <DrawerCardWrapper  elevation={3}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {(websiteTitle ? websiteTitle : 'Project')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {(description ? description : randomDescription)}
                            </Typography>
                        </CardContent>
                        <Grid container spacing={2} p={1}>
                            <Grid item xs={6} display={'flex'} justifyContent={'center'}>
                                <Button disabled={codeLinkDisabled} variant='outlined' fullWidth onClick={() => { window.open((codeLink ? link : 'https://rambsdev.netlify.app/'), '_blank') }}>Codes</Button>
                            </Grid>
                            <Grid item xs={6} display={'flex'} justifyContent={'center'}>
                                <Button disabled={linkDisabled} variant='contained' fullWidth onClick={() => { window.open((link ? link : 'https://rambsdev.netlify.app/'), '_blank') }}>Link</Button>
                            </Grid>
                        </Grid>
                    </DrawerCardWrapper>
                </Collapse>
            </Card>
        </CardWrapper>
    );
};
