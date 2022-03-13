import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider as QueryProvider } from 'react-query';
import { queryClient } from '@core/query';

import { App } from './App';

import './index.css';

const renderApp = (RootApp: FC): void => {
  ReactDOM.render(
    <React.StrictMode>
      <QueryProvider client={queryClient}>
        <Router>
          <RootApp />
        </Router>
      </QueryProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp(App);
