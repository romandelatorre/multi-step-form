import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Switch from '@mui/material/Switch';

import { styled } from '@mui/material/styles';

export const Title = styled('div')(({ theme }) => ({
  fontWeight: '900',
  fontSize: '2rem',
  color: '#022959',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const StackComponent = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '500px',
  height: '90vh',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto',
    height: '80vh',
    position: 'absolute',
    marginTop: 120,
  },
}));

export const ButtonsComponent = styled(Box)(({ theme, justify }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: justify ? 'space-between' : 'flex-end',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'white',
    padding: '1rem',
  },
}));

export const CustomStepper = styled(Stepper)(({ theme }) => ({
  position: 'absolute',
  top: '5rem',
  left: '5rem',
  '& .MuiStepIcon-root.Mui-active': {
    color: '#BEE2FD',
  },

  '& .MuiStepLabel-label': {
    color: 'white',
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const BoxComponent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'white',
    borderRadius: '15px',
    margin: '1rem',
    padding: '1rem',
  },
}));

export const BoxComponentCardForm = styled(Box)(
  ({ border, backgroundColor }) => ({
    border: border,
    borderRadius: '8px',
    width: '100%',
    height: 'auto',
    backgroundColor: backgroundColor,
  })
);

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 25,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 20,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#022959',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 21,
    height: 21,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16,
    opacity: 1,
    backgroundColor: '#022959',
    boxSizing: 'border-box',
  },
}));

export const BoxComponentCardPlan = styled(Box)(
  ({ theme, border, backgroundColor }) => ({
    border: border,
    borderRadius: '8px',
    width: '30%',
    height: '200px',
    backgroundColor: backgroundColor,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      margin: '.5rem 0',
    },
  })
);

export const StackComponentCard = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1rem',
    '& img': {
      marginRight: '1rem',
    },
  },
}));

export const BoxComponentSwitch = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8F9FF',
  borderRadius: '8px',
  width: '100%',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem',
  [theme.breakpoints.down('sm')]: {
    marginTop: '1rem',
  },
}));

export const BoxComponentCardDetail = styled(Box)(() => ({
  borderRadius: '8px',
  width: '100%',
  height: 'auto',
  mb: 2,
  backgroundColor: '#F8F9FF',
}));
