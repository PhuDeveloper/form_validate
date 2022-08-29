import { TextFieldProps } from '@mui/material';

export type InputTextPropsTypes = TextFieldProps & {
  control: any;
  name: string;
  isTurnover?: boolean;
  isCost?: boolean;
};
