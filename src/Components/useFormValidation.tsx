import { useContext } from 'react';
import { FormContext } from './Context';

type FieldName = 'name' | 'email' | 'phone';

export type Form = {
  name: string;
  email: string;
  phone: string;
  selectedPlan: SelectedPlan;
  selectedAddons: any;
};

export type SelectedPlan = {
  img: string;
  title: string;
  priceMonthly: string;
  priceYearly: string;
  offerYearly: string;
  monthly: boolean;
  yearly: boolean;
};

export type SelectedAddon = {
  title: string;
  subTitle: string;
  priceMonthly: string;
  priceYearly: string;
  checkAddon: boolean;
};

const validations = {
  name: (value: string) => {
    if (!value) {
      return 'Name is required';
    }
  },

  email: (value: string) => {
    if (!value) {
      return 'Email is required';
    } else if (!/.+@.+\..+/.test(value)) {
      return 'Invalid email format';
    }
  },

  phone: (value: string) => {
    if (!value) {
      return 'Phone is required';
    }
  },
};

export const useFormValidation = () => {
  const { setErrors, setFormData, errors } = useContext(FormContext);

  const validateForm = (fieldName: FieldName, value: string) => {
    return validations[fieldName](value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const error = validateForm(name as FieldName, value);

    setFormData((prev: Form) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev: any) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  function hasEmptyElements(data: Form, activeStep: number) {
    const validateStep = (step: number) => {
      switch (step) {
        case 0:
          return !data.name || !data.email || !data.phone || hasErrors;
        case 1:
          return Object.keys(data.selectedPlan).length === 0;
        case 2:
          return data.selectedAddons.length === 0;
        default:
          return false;
      }
    };

    return validateStep(activeStep);
  }

  const hasErrors = Object.keys(errors).length > 0;

  return {
    handleChange,
    hasEmptyElements,
    hasErrors,
  };
};
