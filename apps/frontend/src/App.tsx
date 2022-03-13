import React, { Suspense } from 'react';
import { useRouts } from '@core/router';
import { NotificationContainer, PageLoader } from '@components/common';
import { Box } from '@mui/material';

function App() {
  const Routes = useRouts();

  return (
    <Box>
      <NotificationContainer />
      <Suspense fallback={<PageLoader />}>{Routes}</Suspense>
    </Box>
  );
}

export { App };
