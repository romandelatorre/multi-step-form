import { useState, useContext, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
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
    !hasEmptyElements(formData, activeStep) &&
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleSubmit(activeStep);
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
    <Box
      sx={{
        backgroundColor: isMobile ? '#eff5ff' : 'white',
        width: '100%',
      }}
    >
      <Stack
        direction="column"
        justifyContent={{ sm: 'flex-start', md: 'center' }}
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
            justifyContent: 'space-between',
            position: 'relative',
            width: { xs: '100%', sm: '100%', md: '70%', xl: '50%' },
          }}
        >
          <Box
            component="img"
            sx={{
              width: '100%',
              height: { sm: 'auto', md: '90vh' },
              mr: { xs: 0, md: 5 },
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
                <Box>
                  {activeStep === 0 ? null : (
                    <Button onClick={handleBack} sx={{ color: '#9699AA' }}>
                      Go Back
                    </Button>
                  )}
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      backgroundColor: activeStep === 3 ? '#483EFF' : '#022959',
                    }}
                  >
                    {activeStep === 3 ? 'Confirm' : 'Next Step'}
                  </Button>
                </Box>
              </ButtonsComponent>
            )}
          </StackComponent>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
