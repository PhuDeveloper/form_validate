import { SelectProps } from '@mui/material';

export type InputSelectPropsTypes = SelectProps & {
  name: string;
  control: any;
  menus: MenuInterface[];
  width?: string;
  placeholder?: string;
  multiple?: boolean;
  currValue?: string[];
  isTurnover?: boolean;
  isCost?: boolean;
};

interface MenuInterface {
  value: string | number;
  content: string;
  isDisabled?: boolean;
}
