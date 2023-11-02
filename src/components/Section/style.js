import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
// const imagePath = '/assets/img/home-bg.png'; // The relative path to your image

const HeroWrapper = styled('div')(({ theme }) => ({
    // outline: '1px solid red',
    // marginTop: '7vh',
    padding: '30vh 10vh 0 15vh',
    minHeight: '100vh',
}));

const AboutWrapper = styled(Paper)(({ theme }) => ({
    minHeight: '90vh',
    background: 'var(--section-bg)',
    padding: '0 100px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px', // Adjust padding for smaller screens
    },
}));

const PortfolioWrapper = styled(Paper)(({ theme }) => ({
    minHeight: '90vh',
    padding: '0 10vw 100px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px', // Adjust padding for smaller screens
    },
}));
const ContactWrapper = styled(Paper)(({ theme }) => ({
    minHeight: '90vh',
    background: 'var(--section-bg)',
    padding: '10vw 10vw 100px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px', // Adjust padding for smaller screens
    },
}));
const ServicesWrapper = styled(Paper)(({ theme }) => ({
    minHeight: '90vh',
    padding: '0 100px 100px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px', // Adjust padding for smaller screens
    },
}));

const TestWrapper = styled('div')(({ theme }) => ({
    minHeight: '90vh',
    background: 'var(--secondary)',
    padding: '50px 100px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px', // Adjust padding for smaller screens
    },
}));

const ImageWrapper = styled('div')(({ theme }) => ({
    // outline: '1px solid red',
    width: '100%',
    marginLeft: '10px'
}));


const StyledTypography = styled(Typography)(({ theme }) => ({
    // outline: '1px solid red',
    marginBottom: '1rem',
    letterSpacing: '.09rem',
    wordSpacing: '.2rem',
    lineHeight: '1.7rem',
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.body2,
        textAlign: 'center',
        fontSize: '1rem',
    },
}));

export {
    AboutWrapper, ContactWrapper, HeroWrapper,
    ImageWrapper, PortfolioWrapper, ServicesWrapper, StyledTypography, TestWrapper
};

