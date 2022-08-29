import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { useController } from 'react-hook-form';
import { InputSelectPropsTypes } from './type';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';

const InputSelect = (props: InputSelectPropsTypes) => {
  const {
    name,
    control,
    menus,
    width,
    placeholder,
    multiple,
    readOnly,
    disabled,
    currValue,
    isTurnover,
    isCost,
    ...restProps
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });

  const size = restProps.size || 'small';
  const widthFormControl = width || '100%';

  if (multiple) {
    return (
      <FormControl
        error={error ? !!error : false}
        sx={{ width: widthFormControl, marginY: 0 }}
        className={clsx({
          'is-readonly': readOnly,
          'is-disabled': disabled,
          'is-cost': isCost,
          'is-turnover': isTurnover,
        })}
      >
        <Select
          className={clsx({
            'is-cost': isCost,
            'is-turnover': isTurnover,
          })}
          size={size}
          displayEmpty
          name={field.name}
          inputRef={field.ref}
          onBlur={field.onBlur}
          value={field.value}
          onChange={(e) => field.onChange(e?.target?.value)}
          inputProps={{
            placeholder: placeholder,
            readOnly,
            disabled,
          }}
          multiple={multiple}
          defaultValue={restProps.defaultValue}
          renderValue={(selected) => {
            let value = '';
            if ((!selected && selected !== 0) || selected.length === 0) {
              return <Box sx={{ color: '#888888' }}>{placeholder}</Box>;
            }

            for (let i = 0; i <= menus.length; i++) {
              if (selected === menus[i]?.value) {
                value = menus[i]?.content;
                return value;
              }
            }

            return value;
          }}
          {...restProps}
        >
          {menus?.map((menuItem, key) => {
            const keyItem = `${menuItem.content}-${key}`;

            return (
              <MenuItem key={keyItem} value={menuItem.value}>
                <Checkbox checked={currValue!.indexOf(menuItem.value as never) > -1} />
                <ListItemText primary={menuItem.content} />
              </MenuItem>
            );
          })}
        </Select>

        <FormHelperText>{error ? error?.message : null}</FormHelperText>
      </FormControl>
    );
  }
  return (
    <FormControl
      error={error ? !!error : false}
      sx={{ width: widthFormControl, marginY: 0, height: 'min-content' }}
    >
      <Select
        size={size}
        displayEmpty
        name={field.name}
        inputRef={field.ref}
        onBlur={field.onBlur}
        className={clsx({
          'is-readonly': readOnly,
          'is-disabled': disabled,
          'is-cost': isCost,
          'is-turnover': isTurnover,
        })}
        value={field.value}
        onChange={(e) => field.onChange(e?.target?.value)}
        inputProps={{
          placeholder: placeholder,
          readOnly,
          disabled,
        }}
        defaultValue={restProps.defaultValue}
        renderValue={(selected) => {
          console.log('...', selected)
          let value = '';
          if ((!selected && selected !== 0) || selected.length === 0) {
            return <Box sx={{ color: '#888888' }}>{placeholder}</Box>;
          }

          for (let i = 0; i <= menus.length; i++) {
            if (selected === menus[i]?.value) {
              value = menus[i]?.content;
              return value;
            }
          }

          return value;
        }}
        {...restProps}
      >
        {menus.map((menuItem, key) => {
          return (
            <MenuItem key={key} value={menuItem.value} disabled={menuItem.isDisabled}>
              {menuItem.content}
            </MenuItem>
          );
        })}
      </Select>

      {error ? <FormHelperText>{error?.message}</FormHelperText> : null}
    </FormControl>
  );
};

export default InputSelect;
