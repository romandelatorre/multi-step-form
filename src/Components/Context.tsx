import { createContext, useState } from 'react';
import type { Form } from './useFormValidation';

interface FormContext {
  formData: any;
  errors: { [key: string]: string };
  setFormData: any;
  setErrors: any;
}

export const FormContext = createContext<FormContext>({
  formData: {},
  errors: {},
  setFormData: () => {},
  setErrors: () => {},
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

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default ContextProvider;
