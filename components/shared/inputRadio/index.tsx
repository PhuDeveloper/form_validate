import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useController } from 'react-hook-form';
import { InputRadioPropsTypes } from './type';

const InputRadio = (props: InputRadioPropsTypes) => {
  const { name, control, disabled, radioList, fontSize, ...rest } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });

  const isRow = rest.row || true;

  return (
    <FormControl error={error ? !!error : false} disabled={disabled} sx={{ marginY: 0 }}>
      <RadioGroup
        row={isRow}
        onChange={(e) => field.onChange(e?.target?.value)}
        name={field.name}
        ref={field.ref}
        onBlur={field.onBlur}
        value={field.value}
        {...rest}
      >
        {radioList.map((radioItem, key) => {
          return (
            <FormControlLabel
              key={key}
              value={radioItem.value}
              control={<Radio />}
              label={<Typography fontSize={fontSize ?? 16}>{radioItem.label}</Typography>}
            />
          );
        })}
      </RadioGroup>
      {error ? <FormHelperText>{error?.message}</FormHelperText> : null}
    </FormControl>
  );
};

export default InputRadio;
