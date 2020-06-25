import React from 'react';
import Header from './Header';
// import TransactionContext from './TransContext';
import {TransactionProvider} from './TransContext';

function App() {
  return (
    <TransactionProvider>
      <Header />
    </TransactionProvider>
  );
}

export default App;
