import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/system';
import Slide from '@mui/material/Slide';

const CardContainer = styled(Card)`
  width: 300px;
  transition: max-height 0.3s ease-in-out;
  max-height: 200px;

  &.expanded {
    max-height: 500px;
  }
`;

const ExpandableCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCoverClickAway = () => {
    setExpanded(false);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={handleCoverClickAway}>
        <CardContainer className={expanded ? 'expanded' : ''}>
          <CardContent>
            <Typography variant="h5" component="div">
              Click Me
            </Typography>
            <Typography variant="body2">
              This is an expandable card.
            </Typography>
            {expanded && (
              <Typography variant="body2">
                Content that is visible when expanded.
              </Typography>
            )}
          </CardContent>
          <Button onClick={handleToggleExpand}>
            {expanded ? 'Cover' : 'Expand'}
          </Button>
        </CardContainer>
      </ClickAwayListener>
    </div>
  );
};

export default ExpandableCard;
