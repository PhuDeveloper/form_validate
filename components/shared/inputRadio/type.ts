import { RadioGroupProps } from '@mui/material';

export type InputRadioPropsTypes = RadioGroupProps & {
  name: string;
  control: any;
  disabled?: boolean;
  radioList: RadioListInterface[];
  fontSize?: number;
};

interface RadioListInterface {
  value: string | number | boolean;
  label: string;
}
