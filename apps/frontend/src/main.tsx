import { FC, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider as QueryProvider } from 'react-query';
import { queryClient } from '@core/query';

import { App } from './App';

import './index.css';

const getRootNode = (id: string) => {
  const container = document.getElementById(id);

  if (!container) {
    const syntheticNode = document.createElement('div');

    syntheticNode.id = id;
    document.body.appendChild(syntheticNode);

    return syntheticNode;
  }
  return container;
};

const renderApp = (RootApp: FC): void => {
  const root = createRoot(getRootNode('root'));

  root.render(
    <StrictMode>
      <QueryProvider client={queryClient}>
        <Router>
          <RootApp />
        </Router>
      </QueryProvider>
    </StrictMode>
  );
};

renderApp(App);
