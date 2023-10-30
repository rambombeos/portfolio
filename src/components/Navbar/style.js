import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)((props) => ({
    backgroundColor: props.variant === 'outlined' ? 'transparent' : color || 'lightblue',
    color: props.variant === 'outlined' ? color || 'lightblue' : 'white',
    border: props.variant === 'outlined' ? `2px solid ${color || 'lightblue'}` : 'none',
    '&:hover': {
        backgroundColor: props.variant === 'outlined' ? color || 'lightblue' : color || 'lightcoral',
    },
}));
const HeaderWrapper = styled(`div`)((props) => ({
    ...theme.mixins.toolbar,
    margin: 0,
    padding: 0,
}));
const NavbarWrapper = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
    position: 'static',
    margin: 0,
    padding: 0,
    height: '20px',
    width: '100%',
}));


export {
    CustomButton,
    HeaderWrapper, NavbarWrapper
};

