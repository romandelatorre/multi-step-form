import { useState, useEffect, useContext } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { FormContext } from './Context';
import type { SelectedAddon } from './useFormValidation';
import { BoxComponent, Title, BoxComponentCardForm } from '../styles/styles';

const data = [
  {
    title: 'Online service',
    subTitle: 'Access to multiplayer games',
    priceMonthly: '+$1/mo',
    priceYearly: '+$10/yr',
    checkAddon: false,
  },
  {
    title: 'Larger storage',
    subTitle: 'Extra 1TB of cloud save',
    priceMonthly: '+$2/mo',
    priceYearly: '+$20/yr',
    checkAddon: false,
  },
  {
    title: 'Customizable profile',
    subTitle: 'Custom theme on your profile',
    priceMonthly: '+$2/mo',
    priceYearly: '+$20/yr',
    checkAddon: false,
  },
];

function SelectAddons() {
  const { formData, setFormData, isMobile } = useContext(FormContext);
  const [checkedAddons, setCheckedAddons] = useState<boolean[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddon[]>([]);

  useEffect(() => {
    setFormData({ ...formData, selectedAddons });
  }, [selectedAddons, checkedAddons]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedAddons = [...checkedAddons];
    newCheckedAddons[index] = !newCheckedAddons[index];
    setCheckedAddons(newCheckedAddons);

    const newSelectedAddons = data.filter(
      (index: any) => newCheckedAddons[index]
    );

    setSelectedAddons(newSelectedAddons);
  };

  return (
    <BoxComponent>
      <Title sx={{ mt: { xm: 0, sm: 5 } }}>Pick add-ons</Title>
      <Typography
        variant="subtitle2"
        align="left"
        color="#9699AA"
        sx={{
          mt: 2,
        }}
      >
        Add-ons help enhance your gaming experience.
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: isMobile ? 2 : 5.5,
        }}
      >
        {data.map((item, index) => (
          <BoxComponentCardForm
            key={index}
            component="div"
            sx={{
              mb: 2,
              backgroundColor: checkedAddons[index] ? '#F8F9FF' : null,
              border: checkedAddons[index]
                ? '1.5px solid #483EFF'
                : '1.5px solid #9699AA',
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: isMobile ? '.5rem' : '1rem',
              }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Checkbox
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={{
                    p: '1rem',
                  }}
                  checked={checkedAddons[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <Box>
                  <Typography
                    color="#022959"
                    sx={{ fontWeight: '600', fontSize: '1.2rem' }}
                    align="left"
                  >
                    {item.title}
                  </Typography>
                  <Typography color="#9699AA" align="left">
                    {item.subTitle}
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="caption" color="#483EFF" align="left">
                {item.priceMonthly}
              </Typography>
            </Stack>
          </BoxComponentCardForm>
        ))}
      </Stack>
    </BoxComponent>
  );
}

export default SelectAddons;
