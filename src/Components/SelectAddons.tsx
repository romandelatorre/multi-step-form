import { useState, useEffect, useContext } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { FormContext } from './Context';
import { BoxComponent, Title, BoxComponentCardForm } from '../styles/styles';

const data = [
  {
    title: 'Online service',
    subTitle: 'Access to multiplayer games',
    priceMonthly: '+$1/mo',
    priceYearly: '+$10/yr',
  },
  {
    title: 'Larger storage',
    subTitle: 'Extra 1TB of cloud save',
    priceMonthly: '+$2/mo',
    priceYearly: '+$20/yr',
  },
  {
    title: 'Customizable profile',
    subTitle: 'Custom theme on your profile',
    priceMonthly: '+$2/mo',
    priceYearly: '+$20/yr',
  },
];

function SelectAddons() {
  const { formData, setFormData, isMobile } = useContext(FormContext);
  const [addons, setAddons] = useState(
    data.map((addon) => ({
      ...addon,
      selected: false,
    }))
  );

  const toggleAddon = (index: number) => {
    const updated = [...addons];
    updated[index].selected = !updated[index].selected;
    setAddons(updated);
  };

  const selectedAddons = addons.filter((addon) => addon.selected);

  useEffect(() => {
    setFormData(() => ({
      ...formData,
      selectedAddons,
    }));
  }, [addons]);

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
              backgroundColor: addons[index].selected ? '#F8F9FF' : null,
              border: addons[index].selected
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
                  checked={addons[index].selected}
                  onChange={() => toggleAddon(index)}
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
                {formData.selectedPlan.monthly
                  ? item.priceMonthly
                  : item.priceYearly}
              </Typography>
            </Stack>
          </BoxComponentCardForm>
        ))}
      </Stack>
    </BoxComponent>
  );
}

export default SelectAddons;
