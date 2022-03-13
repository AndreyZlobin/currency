import React from 'react';
import { TextField } from '@mui/material';
import NumberFormat from 'react-number-format';
import { useController } from 'react-hook-form';
import { FormInputProps } from '@components/common/Form/FormInputFormat/types';

export function FormInputFormat<T>({
  format,
  ...props
}: FormInputProps<T> & { format?: string }) {
  const {
    field: { value, ref, onBlur, onChange },
    fieldState,
  } = useController(props);
  const errorMessages = fieldState.error?.message;
  const hasError = Boolean(errorMessages);

  return (
    // @ts-ignore
    <NumberFormat
      {...props}
      format={format}
      value={value}
      inputRef={ref}
      onBlur={onBlur}
      customInput={TextField}
      thousandSeparator={true}
      onValueChange={(c) => onChange(c.floatValue)}
      error={hasError}
      helperText={hasError && errorMessages}
    />
  );
}
