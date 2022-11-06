import { Box, Button, Typography } from '@mui/material';
import { CreateDonate } from '@core/api';
import { useCreateDonate, useFetchCurrencies } from '@core/hooks';
import { DonateForm } from '@components/DonateForm';
import { presets } from '@pages/Donate/constants';

export const DonatePage = () => {
  const { data: currencies, isLoading, isError, error } = useFetchCurrencies();

  const { mutateAsync: createDonate } = useCreateDonate();

  const onSubmit = async (body: CreateDonate): Promise<void> => {
    await createDonate(body);
  };

  const errorMessage = (error as Error)?.message as string | undefined;

  const handlerReloadPage = () => window.location.reload();

  return (
    <Box>
      {!isLoading && currencies?.length && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          width="100vw"
        >
          <DonateForm
            currencies={currencies}
            presets={presets}
            onSubmit={onSubmit}
          />
        </Box>
      )}
      {isError && errorMessage && (
        <>
          <Typography variant="h1">{errorMessage}</Typography>
          <Button variant="contained" onClick={handlerReloadPage}>
            Try to reload page
          </Button>
        </>
      )}
      {!currencies?.length && !isLoading && !isError && (
        <Typography variant="h1">Нет данных</Typography>
      )}
    </Box>
  );
};
