import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './questions.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFaqAction } from '../../redux/Actions/FaqAction';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255)'
      : 'rgba(255, 255, 255)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
    // marginTop: theme.spacing(5), 
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Questions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const { faq } = useSelector((state) => state.faq)

  console.log(faq)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFaqAction())
  }, [])

  return (
    <div id='questions'>
        <div className="text">
            <h1>Common Questions</h1>
        </div>
      {
        faq &&
        faq.map((faq) =>(
          <Accordion onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography> <h5>{faq.title} </h5>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             {faq.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
        ))
      }
    </div>
  );
}
