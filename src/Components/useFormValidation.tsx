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
};

type ValidationFunction = (value: string) => string | undefined;

type ValidationMap = {
  [key: string]: ValidationFunction;
};

const validations: ValidationMap = {
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
  const { setErrors, setFormData, errors, formData } = useContext(FormContext);

  const hasEmptySelectedPlan = Object.values(formData.selectedPlan ?? {}).some(
    (value) => typeof value === 'string' && !value.trim()
  );
  const hasErrors = Object.keys(errors).length > 0;

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

  const handleSubmit = (activeStep: number) => {
    const newErrors: any = {};

    switch (activeStep) {
      case 0:
        Object.keys(validations).map((fieldName: string) => {
          const value = formData[fieldName];
          const error = validations[fieldName](value);

          if (error) {
            newErrors[fieldName] = error;
          }
        });
        break;
      case 1:
        if (hasEmptySelectedPlan) {
          newErrors.selectedPlan = 'Selected Plan is required';
        }
        break;
      case 2:
        if (!formData.selectedAddons.length) {
          newErrors.selectedAddons = 'Selected Addons is required';
        }
        break;
      case 3:
        hasErrors;
        break;
    }

    setErrors(newErrors);
  };

  function hasEmptyElements(data: Form, activeStep: number) {
    const validateStep = (step: number) => {
      switch (step) {
        case 0:
          return !data.name || !data.email || !data.phone || hasErrors;
        case 1:
          return hasEmptySelectedPlan;

        case 2:
          return !data.selectedAddons.length;
        case 3:
          return hasErrors;
        default:
          return false;
      }
    };

    return validateStep(activeStep);
  }

  return {
    handleSubmit,
    handleChange,
    hasEmptyElements,
    hasErrors,
  };
};
