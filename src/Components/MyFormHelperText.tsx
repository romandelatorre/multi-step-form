import FormHelperText from '@mui/material/FormHelperText';
import { useContext } from 'react';
import { FormContext } from './Context';

export const MyFormHelperText = ({ name }: { name: string }) => {
  const { errors } = useContext(FormContext);
  if (!errors[name]) return null;

  return (
    <FormHelperText sx={{ textAlign: 'right' }} error>
      {errors[name]}
    </FormHelperText>
  );
};
