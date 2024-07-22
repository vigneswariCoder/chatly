import React, { useRef, useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CompareIcon from '@mui/icons-material/Compare';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ShareIcon from '@mui/icons-material/Share';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const faqs = [
  {
    question: 'Is there a cost to use the application?',
    answer: 'The basic version of the application is free to use, but we offer a premium subscription with additional features like ad-free listening, offline downloads, and higher audio quality.',
    icon: <AttachMoneyIcon />,
  },
  {
    question: 'How can I upgrade to a premium account?',
    answer: 'Go to the "Subscription" section in your account settings and select the premium plan that suits you best. Follow the payment instructions to complete the upgrade.',
    icon: <UpgradeIcon />,
  },
  {
    question: 'What is the difference between the free and premium versions?',
    answer: 'The free version includes ads and has some limitations on features like offline listening. The premium version offers ad-free listening, offline downloads, and access to exclusive content.',
    icon: <CompareIcon />,
  },
  {
    question: 'How do I create a playlist?',
    answer: 'Go to "My Library" and click on "Create Playlist." Give your playlist a name and start adding your favorite tracks.',
    icon: <PlaylistAddIcon />,
  },
  {
    question: 'Can I listen to music offline?',
    answer: 'Offline listening is available for premium subscribers. Download your favorite songs or playlists by clicking the download icon next to them.',
    icon: <CloudDownloadIcon />,
  },
  {
    question: 'How do I share music with friends?',
    answer: 'Click on the share icon next to any song, album, or playlist. You can share via social media, email, or a direct link.',
    icon: <ShareIcon />,
  },
  {
    question: 'How can I contact customer support?',
    answer: 'Visit the "Help" section in the app or on our website. You can contact us via email, live chat, or phone for assistance.',
    icon: <ContactSupportIcon />,
  },
];

const FAQ: React.FC = () => {
  const faqContainer = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (faqContainer.current) {
        const top = faqContainer.current.getBoundingClientRect().top;
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
    <Box ref={faqContainer} className='d-flex justify-center' sx={{ py: 8, bgcolor: 'background.default', margin: 'auto' }}>
      <Box maxWidth={'900px'}>
        <Box sx={{ margin: 'auto', textAlign: 'center' }}>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              animation: isVisible ? 'slideToLeft 0.8s forwards 0.2s' : 'none',
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              animation: isVisible ? 'slideToRight 0.8s forwards 0.2s' : 'none',
            }}>
            Find answers to some of the most common questions about our music web application. From pricing and account management to creating playlists and collaborating with other musicians, we have you covered.
          </Typography>
        </Box>
        <Box className='faq-container' marginTop={'40px'}>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {faq.icon}
                  <Typography sx={{ marginLeft: 1 }}>{faq.question}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default FAQ;
