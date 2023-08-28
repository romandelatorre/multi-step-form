import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { FormHelperTextUtil } from '../utils/FormHelperTextUtil';
import { FormContext } from './Context';
import { useFormValidation } from './useFormValidation';
import { BoxComponent, Title } from '../styles/styles';

function Form() {
  const { errors, isMobile } = useContext(FormContext);
  const { handleChange } = useFormValidation();

  return (
    <BoxComponent>
      <Title sx={{ mt: { xm: 0, sm: 5 } }}>Personal info</Title>
      <Typography
        variant="subtitle2"
        align="left"
        color="#9699AA"
        sx={{
          mt: isMobile ? 2 : 5.5,
        }}
      >
        Please provide your name, email address, and phone number.
      </Typography>
      <Typography
        variant="subtitle2"
        align="left"
        color="#022959"
        sx={{ fontWeight: '600', mt: isMobile ? 2 : 5, mb: 1 }}
      >
        Name
      </Typography>
      <FormControl fullWidth variant="outlined">
        <FormHelperTextUtil name="name" />
        <OutlinedInput
          data-testid="name-input"
          placeholder="e.g. Stephen King"
          name="name"
          error={!!errors.name}
          onChange={handleChange}
          inputProps={{
            autoComplete: 'off',
          }}
          sx={{
            borderRadius: '8px',
            mb: 4,
          }}
        />
      </FormControl>
      <Typography
        variant="subtitle2"
        align="left"
        color="#022959"
        sx={{ fontWeight: '600', mb: 1 }}
      >
        Email Address
      </Typography>

      <FormControl fullWidth variant="outlined">
        <FormHelperTextUtil name="email" />
        <OutlinedInput
          placeholder="e.g. stephenking@lorem.com"
          name="email"
          error={!!errors.email}
          onChange={handleChange}
          inputProps={{
            autoComplete: 'off',
          }}
          sx={{
            borderRadius: '8px',
            mb: 4,
          }}
        />
      </FormControl>
      <Typography
        variant="subtitle2"
        align="left"
        color="#022959"
        sx={{ fontWeight: '600', mb: 1 }}
      >
        Phone Number
      </Typography>
      <FormControl fullWidth variant="outlined">
        <FormHelperTextUtil name="phone" />
        <OutlinedInput
          placeholder="e.g. +1 234 567 890"
          name="phone"
          error={!!errors.phone}
          onChange={handleChange}
          inputProps={{
            autoComplete: 'off',
            type: 'number',
          }}
          sx={{
            borderRadius: '8px',
            mb: 4,
          }}
        />
      </FormControl>
    </BoxComponent>
  );
}

export default Form;
