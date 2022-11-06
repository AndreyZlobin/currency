import React from 'react';
import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';
import { FormInputProps } from '@components/common/Form/FormInputFormat/types';

export function FormInputFormat<T extends object>({
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
    <TextField
      {...props}
      value={value}
      ref={ref}
      onBlur={onBlur}
      onChange={onChange}
      error={hasError}
      helperText={hasError && errorMessages}
    />
  );
}
