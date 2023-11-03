import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const FooterWrapper = styled(Paper)(({ theme }) => ({
    minHeight: '20vh',
    padding: '7vh 10vw 2vh',
    [theme.breakpoints.down('sm')]: {
        padding: '0 20px', // Adjust padding for smaller screens
    },
}));

export {
    FooterWrapper
};
