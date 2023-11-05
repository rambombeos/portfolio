import { useMediaQuery } from "@mui/material";

export function MediaQueryMUI() {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isExtraLargeScreen = useMediaQuery((theme) => theme.breakpoints.down('xl'));
    return {
        isSmallScreen, isMediumScreen, isLargeScreen, isExtraLargeScreen
    };
}
