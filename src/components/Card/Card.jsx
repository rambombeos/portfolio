import React, { useState } from 'react';
import { Button, Card, CardContent, Drawer, Popover, Typography } from '@mui/material';

export const CardC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
  
    const openPopover = (event) => {
      setAnchorEl(event.currentTarget);
      setIsPopoverOpen(true);
    };
  
    const closePopover = () => {
      setIsPopoverOpen(false);
    };
    return (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Card Content
            </Typography>
            <Button onClick={openPopover}>Open Drawer</Button>
    
            <Popover
              open={isPopoverOpen}
              anchorEl={anchorEl}
              onClose={closePopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div style={{ width: 250, padding: '16px' }}>
                <Typography variant="h6">Drawer Content</Typography>
                {/* Add your content for the embedded drawer here */}
                <Button onClick={closePopover}>Close</Button>
              </div>
            </Popover>
          </CardContent>
        </Card>
      );
};

