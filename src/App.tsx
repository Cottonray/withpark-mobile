import React from 'react';
import RootNavigation from './navigations/RootNavigation';
import AppProvider from './providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <RootNavigation />
    </AppProvider>
  );
};

export default App;
