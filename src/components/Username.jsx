import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Username() {
  return (
    <div>
      <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Username</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Change Username
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
