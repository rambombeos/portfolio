import { Grid, Typography } from '@mui/material';
import React from 'react';
import { AboutWrapper, ImageWrapper, StyledTypography } from '../style';

// Import the image
import designPcImage from '../../../assets/img/design-pic.jpg';

export const About = () => {
    return (
        <AboutWrapper>
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center', }}>
                    <Typography color='primary' variant='h3' m={5}>ABOUT ME</Typography>
                </Grid>
                <Grid item xs={12} md={5} p={1}>
                    <ImageWrapper>
                        <img style={{ width: '100%' }} src={designPcImage} alt='Design PC' />
                    </ImageWrapper>
                </Grid>
                <Grid item xs={12} md={7} p={1}>
                    <StyledTypography >
                        A tech enthusiast and full stack web developer. I've been working as a freelancer for about three years now, my attention is on pursuing my ideal profession in web development. I have a Bachelor of Science in Computer Engineering , and I received my software development training through Village88, a company founded by the same person who established CodingDojo, provided me with the opportunity to learn from some of the most experienced developers in the industry, and I am grateful for the skills and knowledge.
                    </StyledTypography>
                    <StyledTypography>
                        Now my objective is to provide innovative, quick solutions that support business empowerment and growth. I take pleasure in my ability to pay attention to detail, solve problems, and manage projects. These traits have allowed me to provide great service and become recognized as a Top Rated freelancer on Upwork . I have faith in my technological know-how and my capacity to rise to any challenge.
                    </StyledTypography>
                </Grid>
            </Grid>
        </AboutWrapper >
    );
};
