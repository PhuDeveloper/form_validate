import { TextField } from "@mui/material";
import { forwardRef } from "react";
import { useController } from "react-hook-form";
import { InputTextPropsTypes } from "./type";
import clsx from "clsx";

const InputText = function (props: InputTextPropsTypes, ref: any) {
  const { name, control, isTurnover, isCost, ...rest } = props;

  const isReadOnly = rest.inputProps?.readOnly ?? false;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });
  const size = rest.size || "small";
  const disabled = rest.disabled;

  return (
    <TextField
      className={clsx({
        "is-readonly": isReadOnly,
        "is-disabled": disabled,
        "is-turnover": isTurnover,
        "is-cost": isCost,
      })}
      sx={{ marginY: 0 }}
      fullWidth
      size={size}
      name={field.name}
      inputRef={ref ?? field.ref}
      onBlur={field.onBlur}
      value={field.value}
      onChange={(e) => {
        if (
          field.name.includes("email") ||
          field.name.includes("Email") ||
          field.name.includes("mail")
        ) {
          field.onChange(e?.target?.value.trim());
        } else {
          field.onChange(e?.target?.value);
        }
      }}
      error={error ? !!error : false}
      helperText={error && !disabled ? error?.message : null}
      {...rest}
      autoComplete="off"
    />
  );
};

export default forwardRef(InputText);
