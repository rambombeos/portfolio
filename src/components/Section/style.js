import styled from '@emotion/styled';
// const imagePath = '/assets/img/home-bg.png'; // The relative path to your image

const HeroWrapper = styled('div')(({ theme }) => ({
    // outline: '1px solid red',
    marginTop: '7vh',
    padding: '10px',
    minHeight: '100vh',
}));
const AboutWrapper = styled('div')(({ theme }) => ({
    outline: '1px solid red',
    // marginTop: '7vh',
    minHeight: '95vh',
    background: '#222',
    padding: '0 100px',
    marginBottom:'50px',
}));

export {
    AboutWrapper,
    HeroWrapper
};
