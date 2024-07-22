import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const waveSVGOne = `
<svg width="1444" height="309" viewBox="0 0 1444 309" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1444 0C1400.61 4.26717 1321.23 81.7043 1246.29 87.1357C1171.34 92.5671 1089.41 56.2164 1018.41 62.6821C947.403 69.1478 901.573 118.462 814.791 124.928C728.009 131.394 665.805 163.882 586.912 168.279C508.019 172.676 358.568 174.34 283.619 181.84C208.671 189.34 43.391 304.733 -3.5882e-05 309H23.93H1444V0Z" fill="url(#paint0_linear_377_27)"/>
<defs>
<linearGradient id="paint0_linear_377_27" x1="733.965" y1="62.6815" x2="733.965" y2="308.999" gradientUnits="userSpaceOnUse">
<stop stop-color="#96CDE5"/>
<stop offset="1"/>
</linearGradient>
</defs>
<filter id="drop-shadow">
  <feDropShadow dx="2" dy="4" stdDeviation="6"/>
</filter>
<style>
  path {
    filter: url(#drop-shadow);
  }
</style>
</svg>
`;

const waveSVGTwo = `
<svg width="1444" height="309" viewBox="0 0 1444 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0C32.2232 6.07921 110.096 20.5326 163.17 30.9925C216.243 41.4524 243.286 22.2312 292.568 30.9925C341.851 39.7538 432.169 83.679 489.034 89.0432C545.898 94.4075 607.738 73.0562 664.603 78.4205C721.467 83.7847 773.356 109.07 830.22 121.229C887.084 133.387 936.367 159.134 1000.81 167.895C1065.26 176.657 1151.57 196.701 1212.22 203.764C1272.88 210.827 1419.36 302.921 1444 309H1364.75H0V0Z" fill="url(#paint0_linear_377_28)"/>
<defs>
<linearGradient id="paint0_linear_377_28" x1="682.373" y1="-9.22757e-08" x2="682.373" y2="309" gradientUnits="userSpaceOnUse">
<stop stop-color="#89DBFF"/>
<stop offset="1" stop-color="#000506"/>
</linearGradient>
</defs>
<filter id="drop-shadow">
  <feDropShadow dx="2" dy="4" stdDeviation="6"/>
</filter>
<style>
  path {
    filter: url(#drop-shadow);
  }
</style>
</svg>
`;


const Hero: React.FC = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newOffset = window.pageYOffset;
            setOffset(newOffset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box className='hero-container' sx={{ bgcolor: '#121212', color: 'white', textAlign: 'center', padding: '2rem 2rem' }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: '6rem', fontWeight: 900 }}>
                Let the <br />Music Play
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Explore personalized playlists, collaborative tools, and intuitive tracking all in one place. Create music, get inspired, and see your progress effortlessly and efficiently.
            </Typography>
            <Button
                variant="contained"
                sx={{
                    zIndex: 11,
                    mt: 2,
                    bgcolor: 'orange',
                    color: '#fff',
                    ':hover': {
                        bgcolor: '#9c6501',
                    },
                }}
            >
                Get App Now
            </Button>
            {/* Wavy design at the bottom */}
            <div
                className='wave1'
                style={{ transform: `translateX(${offset * 2}px)` }}
                dangerouslySetInnerHTML={{ __html: waveSVGOne }}
            />
            <div
                className='wave2'
                style={{ transform: `translateX(${-offset *2}px)` }}
                dangerouslySetInnerHTML={{ __html: waveSVGTwo }}
            />
        </Box>
    );
};

export default Hero;
