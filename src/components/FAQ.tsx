import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'How does the pricing work for teams?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'How does the pricing work for teams?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'How does the pricing work for teams?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const FAQ: React.FC = () => (
  <Box sx={{ py: 8, bgcolor: 'background.default' }}>
    {faqs.map((faq, index) => (
      <Accordion key={index}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

export default FAQ;
