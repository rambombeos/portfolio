import styled from '@emotion/styled';
const imagePath = '/assets/img/home-bg.png'; // The relative path to your image

const HeroWrapper = styled('div')(({ theme }) => ({
    outline: '1px solid red',
    backgroundImage: `url(${imagePath})`, // Use the url() function to set the background image
    opacity: '0.99', // The value should be between 0 and 1
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed', // Typo: 'backgroundSttachment' should be 'backgroundAttachment'
    zIndex: '2',
    '&::after': { // Use double colons for pseudo-elements, e.g., '::after'
        content: "''", // Add content for pseudo-element
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#222222', // Specify a background color
        zIndex: '2', // Make sure it's a string, not a number
    },
}));

export { HeroWrapper };
