import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled('div')((theme) => ({
    // ...theme.mixins.toolbar,
    margin: 0,
    padding: 0,
}));
const NavbarWrapper = styled('div')((theme) => ({
    // ...theme.mixins.toolbar,
    margin: 0,
    padding: 0,
}));

export {
    NavbarWrapper,
    HeaderWrapper,
};
