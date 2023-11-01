/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Paper } from '@mui/material';

const cardContainerStyle = css`
  // width: 300px;
  max-height: 400px;
`;


const CardWrapper = styled('div')(({ theme }) => ({
  minHeight: '50vh',
}));
const DrawerCardWrapper = styled(Paper)(({ theme }) => ({
  // background: theme.palette.primary.main,
  height: '50vh',
}));

export {
  CardWrapper, DrawerCardWrapper, cardContainerStyle
};

