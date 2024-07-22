import React, { useRef, useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { FaMusic, FaUsers, FaChartLine } from 'react-icons/fa';

const features = [
  {
    icon: <FaMusic className="features-icon" size={60} />,
    title: 'Personalized Playlists',
    description: 'Create and enjoy playlists tailored to your unique taste. Discover new tracks and artists that match your mood and preferences.',
  },
  {
    icon: <FaUsers className="features-icon" size={60} />,
    title: 'Collaborative Music Creation',
    description: 'Join forces with fellow musicians and create music together seamlessly. Share ideas, collaborate on projects, and produce tracks as a team.',
  },
  {
    icon: <FaChartLine className="features-icon" size={60} />,
    title: 'Progress Tracking',
    description: 'Monitor your musical growth with intuitive progress tracking. Set milestones, track your practice sessions, and celebrate your achievements.',
  },
];

const Features: React.FC = () => {
  const featuresContainer = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (featuresContainer.current) {
        const top = featuresContainer.current.getBoundingClientRect().top;
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
    <Box ref={featuresContainer} className="features-container">
      <Box className="features-inner">
        <Box maxWidth={'700px'} margin={'auto'}>
          <Typography
            variant="h2"
            gutterBottom
            className="features-title"
            style={{
              animation: isVisible ? 'slideToLeft 0.8s forwards 0.2s' : 'none',
            }}>
            Everything You Need for Your Musical Journey
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className="features-description"
            style={{
              animation: isVisible ? 'slideToRight 0.8s forwards 0.2s' : 'none',
            }}>
            Explore personalized playlists, collaborative tools, and intuitive tracking all in one place. Create music, get inspired, and see your progress effortlessly and efficiently.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                className={`slide-in-animation ripple-animation h-100`}
                style={{
                  padding: '70px 46px',
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                  animation: isVisible
                    ? `slideToTop 0.8s forwards ${index * 0.2}s`
                    : 'none',
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  className="slide-in-animation"
                  style={{
                    animation: isVisible
                      ? `slideToTop 0.8s forwards ${index * 0.2 + 0.4}s`
                      : 'none',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  className="slide-in-animation"
                  style={{
                    animation: isVisible
                      ? `slideToTop 0.8s forwards ${index * 0.2 + 0.8}s`
                      : 'none',
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
