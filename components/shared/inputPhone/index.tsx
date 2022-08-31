import { TextField } from '@mui/material';
import clsx from 'clsx';
import { ChangeEvent, forwardRef } from 'react';
import { useController } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { InputPhonePropsTypes } from './type';

const InputPhone = (props: InputPhonePropsTypes, ref: any) => {
  const {
    name,
    control,
    size,
    variant,
    fullWidth,
    id,
    label,
    defaultValue,
    disabled,
    placeholder,
    readOnly,
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });

  const sizeTextField = size || 'small';
  const variantTextField = variant || 'outlined';
  const fullWidthTextField = fullWidth || true; 

  return (
    <NumberFormat
      customInput={TextField}
      className={clsx({
        'is-readonly': readOnly,
        'is-disabled': disabled,
      })}
      sx={{ marginY: 0 }}
      fullWidth={fullWidthTextField}
      size={sizeTextField}
      variant={variantTextField}
      id={id}
      label={label}
      defaultValue={defaultValue}
      disabled={disabled}
      inputProps={{ readOnly: readOnly }}
      name={field.name}
      inputRef={ref ?? field.ref}
      onBlur={field.onBlur}
      value={field.value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        field.onChange(e?.target?.value)
      }
      autoComplete="off"
      error={error ? !!error : false}
      helperText={error && !disabled ? error?.message : null}
      type="text"
      format="##############"
    />
  );
};

export default forwardRef(InputPhone);
