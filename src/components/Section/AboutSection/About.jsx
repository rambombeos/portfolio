import React from 'react';
import { AboutWrapper } from '../style';
import { Grid, Typography } from '@mui/material';

// Import the image
import designPcImage from '../../../assets/img/design-pic.jpg';

export const About = () => {
    return (
        <AboutWrapper>
            <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center', }}><Typography variant='h2'>About Me</Typography></Grid>
                <Grid item xs={5} sx={{ outline: '1px solid red', padding: '50px' }}>
                    {/* Use the imported image */}
                    <img src={designPcImage} alt='Design PC' />
                </Grid>
                <Grid item xs={7} sx={{ outline: '1px solid red' }}>
                    <Typography>
                        A tech enthusiast and full stack web developer. I've been working as a freelancer for about three years now, my attention is on pursuing my ideal profession in web development. I have a Bachelor of Science in Computer Engineering , and I received my software development training through Village88, a company founded by the same person who established CodingDojo, provided me with the opportunity to learn from some of the most experienced developers in the industry, and I am grateful for the skills and knowledge.
                    </Typography>
                    <Typography>
                        Now my objective is to provide innovative, quick solutions that support business empowerment and growth. I take pleasure in my ability to pay attention to detail, solve problems, and manage projects. These traits have allowed me to provide great service and become recognized as a Top Rated freelancer on Upwork . I have faith in my technological know-how and my capacity to rise to any challenge.
                    </Typography>
                </Grid>
            </Grid>
        </AboutWrapper >
    );
};
