import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MyFormHelperText } from './MyFormHelperText';
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
        <MyFormHelperText name="name" />
        <OutlinedInput
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
        <MyFormHelperText name="email" />
        <OutlinedInput
          placeholder="e.g. Stephen King"
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
        <MyFormHelperText name="phone" />
        <OutlinedInput
          placeholder="e.g. Stephen King"
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
