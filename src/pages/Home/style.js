import styled from "@emotion/styled";
// Import the background image
import backgroundImage from '../../assets/img/home-bg.png';

const HomepageWrapper = styled('div')((theme) => ({
    // position: 'absolute', // Make the container absolute
    zIndex: -9999, // Set a lower z-index value
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed', // Set the background to be fixed
}));

const PageWrapper = styled('div')((theme) => ({
    padding: '0 20px',
}));

export {
    PageWrapper,
    HomepageWrapper
}
