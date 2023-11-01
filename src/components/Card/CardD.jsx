import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Slide, Backdrop } from '@mui/material';

const CardWithCoveringDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Content
          </Typography>
          <Button onClick={openDrawer}>Open Drawer</Button>
        </CardContent>
      </Card>

      <Slide in={isDrawerOpen} direction="left">
        <div style={{ width: 250, height: '100%', position: 'fixed', top: 0, right: 0 }}>
          <Typography variant="h6">Drawer Content</Typography>
          <Button onClick={closeDrawer}>Close Drawer</Button>
        </div>
      </Slide>

      <Backdrop open={isDrawerOpen} onClick={closeDrawer} />
    </div>
  );
};

export default CardWithCoveringDrawer;
