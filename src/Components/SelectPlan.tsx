import { useState, useContext, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { FormContext } from './Context';
import { MyFormHelperText } from './MyFormHelperText';
import type { SelectedPlan } from './useFormValidation';

const dataSelectedPlan = [
  {
    img: 'arcadeIcon.svg',
    title: 'Arcade',
    priceMonthly: '$9/mo',
    priceYearly: '$90/yr',
    offerYearly: '2 months free',
    monthly: true,
    yearly: false,
  },
  {
    img: 'advanceIcon.svg',
    title: 'Advanced',
    priceMonthly: '$12/mo',
    priceYearly: '$120/yr',
    offerYearly: '2 months free',
    monthly: true,
    yearly: false,
  },
  {
    img: 'proIcon.svg',
    title: 'Pro',
    priceMonthly: '$15/mo',
    priceYearly: '$150/yr',
    offerYearly: '2 months free',
    monthly: true,
    yearly: false,
  },
];

const Title = styled('div')(() => ({
  fontWeight: '900',
  fontSize: '2rem',
  color: '#022959',
  textAlign: 'left',
}));

const CustomSwicht = styled(Switch)(({ theme }) => ({
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

function SelectPlan() {
  const { formData, setFormData } = useContext(FormContext);

  const [selectedPlan, setSelectedPlan] = useState({
    title: '',
    monthly: true,
    yearly: false,
  });
  const [checked, setChecked] = useState({
    monthly: true,
    yearly: false,
  });

  useEffect(() => {
    setFormData({ ...formData, selectedPlan });
  }, [selectedPlan, checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      monthly: !event.target.checked,
      yearly: event.target.checked,
    });
    setSelectedPlan({
      ...selectedPlan,
      monthly: !event.target.checked,
      yearly: event.target.checked,
    });
  };

  const handleSelected = (item: SelectedPlan) => {
    setSelectedPlan({
      ...item,
      monthly: checked.monthly,
      yearly: checked.yearly,
    });
    setFormData({ ...formData, selectedPlan });
  };

  return (
    <FormControl>
      <Title sx={{ mt: 5 }}>Select Your Plan</Title>
      <Typography
        variant="subtitle2"
        align="left"
        color="#9699AA"
        sx={{
          mt: 2,
        }}
      >
        You have the option of monthly or yearly billing.
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: 5.5,
        }}
      >
        {dataSelectedPlan.map((item, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              border:
                selectedPlan.title === item.title
                  ? '1.5px solid #483EFF'
                  : '1.5px solid #9699AA',
              borderRadius: '8px',
              width: '30%',
              height: '200px',
              backgroundColor:
                selectedPlan.title === item.title ? '#F8F9FF' : null,
            }}
            onClick={() => handleSelected(item)}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={6}
              sx={{
                p: '1rem',
              }}
            >
              <Box component="img" alt={item.title} src={item.img} />
              <Box>
                <Typography
                  color="#022959"
                  sx={{ fontWeight: '600', fontSize: '1.4rem' }}
                  align="left"
                >
                  {item.title}
                </Typography>
                <Typography color="#9699AA" align="left">
                  {checked?.monthly ? item.priceMonthly : item.priceYearly}
                </Typography>
                {checked?.monthly ? null : (
                  <Typography variant="caption" color="#022959" align="left">
                    {item.offerYearly}
                  </Typography>
                )}
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
      <MyFormHelperText name="selectedPlan" />
      <Box
        component="div"
        sx={{
          backgroundColor: '#F8F9FF',
          borderRadius: '8px',
          width: '100%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 6,
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography
            color={checked?.monthly ? '#022959' : '#9699AA'}
            sx={{ fontWeight: '600', fontSize: '1.4rem' }}
          >
            Monthly
          </Typography>
          <CustomSwicht
            checked={checked.yearly}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'toggle yearly/monthly' }}
          />
          <Typography
            color={checked?.yearly ? '#022959' : '#9699AA'}
            sx={{ fontWeight: '600', fontSize: '1.4rem' }}
          >
            Yearly
          </Typography>
        </Stack>
      </Box>
    </FormControl>
  );
}

export default SelectPlan;
