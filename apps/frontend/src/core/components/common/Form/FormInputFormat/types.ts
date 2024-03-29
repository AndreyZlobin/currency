import { TextFieldProps } from '@mui/material';
import { Path, UseControllerProps } from 'react-hook-form';

export type FormInputProps<FormValues extends object> = {
  name: Path<FormValues>;
} & Omit<TextFieldProps, 'name'> &
  UseControllerProps<FormValues>;
