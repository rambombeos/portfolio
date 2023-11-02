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
  // outline: '1px solid red',
  // margin: '10px',
  height: '350px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
  // width: '300px'
}));
const InitialDrawerCardWrapper = styled(Paper)(({ theme }) => ({
  // background: theme.palette.primary.main,
  // outline: '1px solid red',
  // margin: '10px',
  height: '350px',
  // width: '300px'
}));
const PositionWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
export { CardWrapper, DrawerCardWrapper, InitialDrawerCardWrapper, PositionWrapper, cardContainerStyle };

