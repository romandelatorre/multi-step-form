import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import { FormContext } from './Context';
import { Title } from '../styles/styles';
import { BoxComponentCardDetail } from '../styles/styles';

function AllDetail() {
  const { formData } = useContext(FormContext);

  return (
    <FormControl>
      <Title sx={{ mt: { xm: 0, sm: 5 } }}>Finishing up</Title>
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
        <BoxComponentCardDetail component="div">
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
                $9/mo
              </Typography>
            </Box>
          </Stack>
          <Divider variant="middle" />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              p: 3,
              pb: 0,
            }}
          >
            <Box>
              <Typography variant="caption" color="#9699AA" align="left">
                Online service
              </Typography>
            </Box>
            <Box>
              <Typography
                color="#022959"
                sx={{ fontSize: '1rem' }}
                align="left"
              >
                +$1/mo
              </Typography>
            </Box>
          </Stack>
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
                Larger storage
              </Typography>
            </Box>
            <Box>
              <Typography
                color="#022959"
                sx={{ fontSize: '1rem' }}
                align="left"
              >
                +$2/mo
              </Typography>
            </Box>
          </Stack>
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
            +$2/mo
          </Typography>
        </Box>
      </Stack>
    </FormControl>
  );
}

export default AllDetail;
