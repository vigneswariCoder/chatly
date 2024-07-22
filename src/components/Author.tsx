import React from 'react';
import { Box, Typography } from '@mui/material';

const authors = [
    { alt: 'Author 1', image: '/assets/Images/sample.png' },
    { alt: 'Author 2', image: '/assets/Images/sample.png' },
    { alt: 'Author 3', image: '/assets/Images/sample.png' },
    { alt: 'Author 4', image: '/assets/Images/sample.png' },
    { alt: 'Author 5', image: '/assets/Images/sample.png' },
    { alt: 'Author 6', image: '/assets/Images/sample.png' },
    { alt: 'Author 7', image: '/assets/Images/sample.png' },
    { alt: 'Author 8', image: '/assets/Images/sample.png' },
    { alt: 'Author 9', image: '/assets/Images/sample.png' },
];

const AuthorsMarquee: React.FC = () => {

    return (
        <Box sx={{ py: 8, textAlign: 'center', margin: '10px 70px' }}>
            <Typography variant="h2" gutterBottom>
                Popular Authors and tracks
            </Typography>
            <div className="marquee">
                <ul className="marquee__content">
                    {authors.map((item) => (
                        <div className="marquee__item">
                            <img src={item.image} alt="" width={'100%'} />
                        </div>
                    ))}
                </ul>
                <ul className="marquee__content">
                    {authors.map((item) => (
                        <div className="marquee__item">
                            <img src={item.image} alt="" />
                        </div>
                    ))}
                </ul>
            </div>
        </Box>
    );
};

export default AuthorsMarquee;
