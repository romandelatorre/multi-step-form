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
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}));

export const StackComponent = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '50%',
  height: '90vh',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    minWidth: '100%',
    height: '80vh',
    position: 'absolute',
    marginTop: '100px',
  },
}));

export const ButtonsComponent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'white',
    width: 'auto',
    padding: '1.3rem',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export const CustomStepper = styled(Stepper)(({ theme }) => ({
  position: 'absolute',
  top: '5rem',
  left: '5rem',
  '&.MuiStepper-root': {
    [theme.breakpoints.down('md')]: {
      top: '50px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  '& .MuiStepIcon-root': {
    fontSize: '2rem',
    color: 'transparent',
    borderRadius: '50%',
    border: '1px solid white',
    boxShadow: 'inset 0 0 0 1px white',
    '&.Mui-active': {
      color: '#BEE2FD',

      '& text': {
        fill: '#022959',
        fontWeight: 'bolder',
      },
    },
    '&.Mui-completed': {
      color: 'white',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
      margin: '0 .4rem',
    },
  },
  '& .MuiStepLabel-label': {
    color: 'white',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: 'white',
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: 'white',
  },
  [theme.breakpoints.down('md')]: {
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const BoxComponent = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '1rem',
    width: '80%',
    height: 'auto',
  },
}));

export const BoxComponentCardForm = styled(Box)(() => ({
  borderRadius: '8px',
  width: '100%',
  height: 'auto',
}));

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

export const BoxComponentCardPlan = styled(Box)(({ theme }) => ({
  borderRadius: '8px',
  width: '30%',
  height: '200px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto',
    margin: '.5rem 0',
  },
}));

export const StackComponentCard = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '.6rem',
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
  [theme.breakpoints.down('md')]: {
    marginTop: '1rem',
  },
}));

export const BoxComponentCardDetail = styled(Box)(() => ({
  borderRadius: '8px',
  width: '100%',
  height: 'auto',
  backgroundColor: '#F8F9FF',
}));
