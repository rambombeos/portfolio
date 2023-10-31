import { Tabs } from '@mui/material';
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
const StyledTabs = styled(Tabs)((theme) => ({
    // ...theme.mixins,
    color: 'var(--primary-light)',
    '& .Mui-selected': {
        color: 'var(--primary) !important',
    },
    '& .MuiTabs-indicator': {
        backgroundColor: 'var(--primary)',
    },
}));

export {
    StyledTabs,
    NavbarWrapper,
    HeaderWrapper,
};
