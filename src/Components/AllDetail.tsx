import { useContext, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { FormContext } from './Context';
import { Title } from '../styles/styles';
import { BoxComponentCardDetail } from '../styles/styles';
import { BoxComponent } from '../styles/styles';
import { totalDetail } from '../utils/utils';

function AllDetail() {
  const { formData } = useContext(FormContext);
  const [price, setPrice] = useState('');

  useEffect(() => {
    handlePlan(formData.selectedPlan);
    handleAddons(formData.selectedAddons, formData.selectedPlan);
  }, [price]);

  const handlePlan = (plan: any) => {
    if (plan.monthly) {
      setPrice(plan.priceMonthly);
    } else if (plan.yearly) {
      setPrice(plan.priceYearly);
    }
  };

  const handleAddons = (addons: any, plan: any) => {
    addons.forEach((addon: any) => {
      if (addon.selected) {
        if (plan.monthly) {
          setPrice((prevPrice) => prevPrice + addon.priceMonthly);
        } else if (plan.yearly) {
          setPrice((prevPrice) => prevPrice + addon.priceYearly);
        }
      }
    });
  };

  return (
    <BoxComponent>
      <Title sx={{ mt: { sm: 0, md: 5 } }}>Finishing up</Title>
      <Typography
        variant="subtitle2"
        align="left"
        color="#9699AA"
        sx={{
          mt: 2,
        }}
      >
        Double-check everything looks OK before confirming.
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: 5.5,
        }}
      >
        <BoxComponentCardDetail
          component="div"
          sx={{
            mb: 3,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              p: 3,
            }}
          >
            <Box>
              <Typography
                color="#022959"
                sx={{ fontWeight: '600', fontSize: '1rem' }}
                align="left"
              >
                {formData.selectedPlan.title}
                {` (${formData.selectedPlan.yearly ? 'Yearly' : 'Monthly'})`}
              </Typography>
              <Typography variant="caption" color="#9699AA" align="left">
                Change
              </Typography>
            </Box>
            <Box>
              <Typography
                color="#022959"
                sx={{ fontWeight: '800', fontSize: '1rem' }}
                align="left"
              >
                {`+${
                  formData.selectedPlan.yearly
                    ? formData.selectedPlan.priceYearly
                    : formData.selectedPlan.priceMonthly
                }`}
              </Typography>
            </Box>
          </Stack>
          <Divider variant="middle" />
          {formData.selectedAddons.map((item: any) => (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 3,
              }}
            >
              <Box>
                <Typography variant="caption" color="#9699AA" align="left">
                  {item.title}
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="#022959"
                  sx={{ fontSize: '1rem' }}
                  align="left"
                >
                  {formData.selectedPlan.yearly
                    ? item.priceYearly
                    : item.priceMonthly}
                </Typography>
              </Box>
            </Stack>
          ))}
        </BoxComponentCardDetail>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: 3,
        }}
      >
        <Box>
          <Typography variant="caption" color="#9699AA" align="left">
            Total (per month)
          </Typography>
        </Box>
        <Box>
          <Typography
            color="#483EFF"
            sx={{ fontSize: '1rem', fontWeight: '800' }}
            align="left"
          >
            {`+${totalDetail(price)}`}
          </Typography>
        </Box>
      </Stack>
    </BoxComponent>
  );
}

export default AllDetail;
