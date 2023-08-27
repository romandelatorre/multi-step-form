import { useState, useContext, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import './App.css';
import Form from './Components/Form';
import SelectPlan from './Components/SelectPlan';
import SelectAddons from './Components/SelectAddons';
import AllDetail from './Components/AllDetail';
import { FormContext } from './Components/Context';
import { useFormValidation } from './Components/useFormValidation';

const steps = [
  {
    label: 'STEP 1',
    description: `YOUR INFO`,
  },
  {
    label: 'STEP 2',
    description: 'SELECT PLAN',
  },
  {
    label: 'STEP 3',
    description: `ADD-ONS`,
  },
  {
    label: 'STEP 4',
    description: `SUMMARY`,
  },
];

const CustomStepper = styled(Stepper)(() => ({
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
}));

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const { formData } = useContext(FormContext);
  const { hasEmptyElements } = useFormValidation();

  useEffect(() => {
    hasEmptyElements(formData, activeStep);
  }, [formData, activeStep]);

  const handleNext = () => {
    !hasEmptyElements(formData, activeStep) &&
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const stepsComponents = [
    <Form />,
    <SelectPlan />,
    <SelectAddons />,
    <AllDetail />,
  ];

  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          height: '100vh',
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            sx={{
              height: '90vh',
              mr: 5,
            }}
            alt="stepperHero"
            src="stepperHero.svg"
          />
          <CustomStepper
            activeStep={activeStep}
            connector={null}
            orientation="vertical"
          >
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>
                  <Stack direction="column">
                    <Box>{step.label}</Box>
                    <Box>{step.description}</Box>
                  </Stack>
                </StepLabel>
              </Step>
            ))}
          </CustomStepper>

          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{
              minWidth: '500px',
              height: '90vh',
            }}
          >
            {stepsComponents[activeStep]}

            <Stack
              spacing={2}
              direction="row"
              justifyContent={activeStep ? 'space-between' : 'flex-end'}
              alignItems="center"
            >
              {activeStep === 0 ? null : (
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1, color: '#9699AA' }}
                >
                  Go Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1, backgroundColor: '#022959' }}
              >
                Next Step
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
