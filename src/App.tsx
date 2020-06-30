import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Global from './styles/global';

import AppProvider from './hooks/index';
import Routes from './Routes/index';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <Global />
  </Router>
);

export default App;
