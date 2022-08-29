import { TextFieldProps } from '@mui/material';

export type InputPhonePropsTypes = TextFieldProps & {
  control: any;
  name: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'standard' | 'filled';
  fullWidth?: boolean;
  id?: string;
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
};
