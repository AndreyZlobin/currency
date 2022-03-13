import React, { VFC } from 'react';
import { FormInputFormat } from '@components/common';
import { CreateDonate, Currency } from '@core/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, FormControl, MenuItem, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { PresetsList } from '@components/PresetsList/PresetsList';
import { DonateFormProps } from '@components/DonateForm/types';
import { schema } from '@components/DonateForm/schema';
import { debounce } from 'lodash-es';

export const DonateForm: VFC<DonateFormProps> = ({
  onSubmit,
  currencies,
  presets,
}) => {
  const defaultValues: CreateDonate = {
    amount: presets[0],
    currency: currencies[0].code,
  };

  const {
    handleSubmit: submit,
    reset,
    watch,
    control,
    setValue,
    register,
  } = useForm<CreateDonate>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const amount = watch('amount');
  const [currencyCode, setCurrencyCode] = React.useState(currencies[0].code);

  const currentCurrency = currencies?.find(
    (it) => it.code === currencyCode
  ) as Currency;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as Currency['code'];

    setCurrencyCode(value);
  };

  const handleSubmit: SubmitHandler<CreateDonate> = debounce(
    (data: CreateDonate) => {
      onSubmit(data);
      reset({ amount: defaultValues.amount });
    },
    300
  );

  const handlerSelectAmountByPreset = (preset: number) => {
    setValue('amount', preset);
  };

  return (
    <Box width="450px" p={4} border="1px solid #333">
      <form onSubmit={submit(handleSubmit)}>
        <Box mb={5} display="flex" alignItems="center" justifyContent="center">
          <PresetsList
            rate={currentCurrency.rate}
            presets={presets}
            onSelectPreset={handlerSelectAmountByPreset}
            currenAmount={amount}
          />
        </Box>
        <Box mb={5}>
          <Box width="100%" mb={3}>
            <FormControl sx={{ width: '100%' }}>
              <TextField
                select
                value={currencyCode}
                label="Select currency"
                {...register('currency', { required: true })}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem value={option.code} key={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Box>
          <Box width="100%">
            <FormControl sx={{ width: '100%' }}>
              <FormInputFormat
                prefix={currentCurrency.symbol}
                name="amount"
                label="Amount"
                control={control}
              />
            </FormControl>
          </Box>
        </Box>

        <Button variant="contained" type="submit">
          Donate
        </Button>
      </form>
    </Box>
  );
};
