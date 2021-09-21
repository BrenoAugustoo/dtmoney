import { useState } from 'react';

import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from  './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';


export function App() {
  const [ isNewTransactionsModalOpen, setisNewTransactionsModalOpen ] = useState(false);

  function handleOpenNewTransactionModal() {
    setisNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </TransactionsProvider>
  );
}

