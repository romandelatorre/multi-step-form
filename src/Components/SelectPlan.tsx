import { useState, useContext, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormContext } from './Context';
import { MyFormHelperText } from './MyFormHelperText';
import type { SelectedPlan } from './useFormValidation';
import {
  BoxComponent,
  Title,
  BoxComponentCardPlan,
  StackComponentCard,
  BoxComponentSwitch,
  CustomSwitch,
} from '../styles/styles';

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

function SelectPlan() {
  const { formData, setFormData, isMobile } = useContext(FormContext);

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
    <BoxComponent>
      <Title sx={{ mt: { xm: 0, sm: 5 } }}>Select Your Plan</Title>
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
        direction={{ xm: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: isMobile ? 2 : 5.5,
        }}
      >
        {dataSelectedPlan.map((item, index) => (
          <BoxComponentCardPlan
            key={index}
            border={
              selectedPlan.title === item.title
                ? '1.5px solid #483EFF'
                : '1.5px solid #9699AA'
            }
            backgroundColor={
              selectedPlan.title === item.title ? '#F8F9FF' : null
            }
            onClick={() => handleSelected(item)}
          >
            <StackComponentCard
              spacing={{ xm: 0, sm: 6 }}
              sx={{
                p: isMobile ? 0 : '1rem',
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
            </StackComponentCard>
          </BoxComponentCardPlan>
        ))}
      </Stack>
      <MyFormHelperText name="selectedPlan" />
      <BoxComponentSwitch component="div">
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography
            color={checked?.monthly ? '#022959' : '#9699AA'}
            sx={{ fontWeight: '600', fontSize: '1.4rem' }}
          >
            Monthly
          </Typography>
          <CustomSwitch
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
      </BoxComponentSwitch>
    </BoxComponent>
  );
}

export default SelectPlan;
