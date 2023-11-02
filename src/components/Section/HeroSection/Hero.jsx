import { Collapse, Typography } from '@mui/material';
import React, { forwardRef, useEffect, useState } from 'react';
import { HeroWrapper } from '../style';

export const Hero =forwardRef((props, ref)=> {
    const variants = ['Web Development', 'Web Design', 'Frontend Developer', 'Full Stack Developer'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % variants.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <HeroWrapper>
            <Typography variant='h3' color='secondary'>
                Hi! I am
            </Typography>
            <Typography variant='h1' color='primary'>
                Rab Michael
            </Typography>
            {variants.map((variant, index) => (
                <Collapse
                    in={index === currentIndex}
                    key={index}
                    style={{
                        transitionDuration: '.7s' // Adjust the duration as needed
                    }}
                >
                    <Typography variant='h2' color='var(--alternate-color)'>
                        {variant}
                    </Typography>
                </Collapse>
            ))}
        </HeroWrapper>
    );
});
