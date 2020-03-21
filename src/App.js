import React from 'react';
import './App.css';
import { GlobalStateProvider } from './hooks/useGlobalState'

import HomePage from './pages/HomePage'

const App = () => {
  return (
    <GlobalStateProvider>
      <HomePage />
    </GlobalStateProvider>
  )
}

export default App;
