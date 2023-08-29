import { createContext, useState } from 'react';
import type { Form } from './useFormValidation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface FormContext {
  formData: any;
  errors: { [key: string]: string };
  setFormData: any;
  setErrors: any;
  isMobile: any;
}

export const FormContext = createContext<FormContext>({
  formData: {},
  errors: {},
  setFormData: () => {},
  setErrors: () => {},
  isMobile: true,
});

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<Form>({
    name: '',
    email: '',
    phone: '',
    selectedPlan: {
      img: '',
      title: '',
      priceMonthly: '',
      priceYearly: '',
      offerYearly: '',
      monthly: false,
      yearly: false,
    },
    selectedAddons: [],
  });
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        isMobile,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default ContextProvider;
