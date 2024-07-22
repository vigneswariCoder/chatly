import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface Props {

}

const Interface: React.FC<Props> = ( ) => {
    const interfaceContainer = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (interfaceContainer.current) {
                const top = interfaceContainer.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Box ref={interfaceContainer} className="" sx={{ py: 8, textAlign: 'center', margin: '10px 70px' }}>
            <Box className="">
                <Box sx={{ margin: 'auto', maxWidth: 700 }}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        style={{
                            animation: isVisible ? 'slideToLeft 0.8s forwards 0.2s' : 'none',
                        }}>
                        Intuitive Interface
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        style={{
                            animation: isVisible ? 'slideToRight 0.8s forwards 0.2s' : 'none',
                        }}>
                        Experience the joy of music creation with an app designed to track your progress, inspire your creativity, and celebrate your musical milestones, one note at a time.
                    </Typography>
                </Box>
                <Box
                    className="ui-image"
                    style={{
                        animation: isVisible
                            ? `slideToTop 0.8s forwards ${0.2}s`
                            : 'none',
                    }}>
                    <img src="/assets/Images/App-UI.svg" alt="" width="80%" height="80%" />
                </Box>
            </Box >
        </Box >

    );
};

export default Interface;