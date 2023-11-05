import { Grid, Tabs } from '@mui/material';
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
    color: 'var(--primary-light)',
}));

const StyledGrid = styled(Grid)((theme) => ({
    display: 'flex',
    justifyContent: 'center',
}));


export {
    HeaderWrapper, NavbarWrapper, StyledGrid,
    StyledTabs
};

