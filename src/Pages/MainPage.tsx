import { useState, useContext, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Form from '../Components/Form';
import SelectPlan from '../Components/SelectPlan';
import SelectAddons from '../Components/SelectAddons';
import AllDetail from '../Components/AllDetail';
import Summary from '../Components/Summary';
import { FormContext } from '../Components/Context';
import { useFormValidation } from '../Components/useFormValidation';

import {
  CustomStepper,
  StackComponent,
  ButtonsComponent,
} from '../styles/styles';

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

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const { formData, isMobile } = useContext(FormContext);
  const { hasEmptyElements, handleSubmit } = useFormValidation();

  useEffect(() => {
    hasEmptyElements(formData, activeStep);
  }, [formData, activeStep]);

  const handleNext = () => {
    handleSubmit();
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
    <Summary />,
  ];

  return (
    <Container
      sx={{
        backgroundColor: isMobile ? '#eff5ff' : 'white',
      }}
    >
      <Stack
        direction="column"
        justifyContent={{ xs: 'flex-start', sm: 'center' }}
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
              height: { xs: 'auto', sm: '90vh' },
              mr: { xs: 0, sm: 5 },
            }}
            alt="stepperHero"
            src={isMobile ? 'stepperHeroMobile.svg' : 'stepperHero.svg'}
          />
          <CustomStepper
            activeStep={activeStep}
            connector={null}
            orientation="vertical"
          >
            {steps.map((step) => (
              <Step key={step.label} sx={{ mb: isMobile ? 0 : '1rem' }}>
                <StepLabel>
                  <Stack direction="column">
                    <Box>{step.label}</Box>
                    <Box>{step.description}</Box>
                  </Stack>
                </StepLabel>
              </Step>
            ))}
          </CustomStepper>

          <StackComponent>
            {stepsComponents[activeStep]}
            {activeStep === 4 ? null : (
              <ButtonsComponent
                sx={{
                  justifyContent: activeStep ? 'space-between' : 'flex-end',
                }}
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
                  sx={{
                    mt: 1,
                    mr: 1,
                    backgroundColor: activeStep === 3 ? '#483EFF' : '#022959',
                  }}
                >
                  {activeStep === 3 ? 'Confirm' : 'Next Step'}
                </Button>
              </ButtonsComponent>
            )}
          </StackComponent>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
