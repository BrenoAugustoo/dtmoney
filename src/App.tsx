import { useState } from 'react';

import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionsModal';

import { GlobalStyle } from "./styles/global";


export function App() {
  const [ isNewTransactionsModalOpen, setisNewTransactionsModalOpen ] = useState(false);

  function handleOpenNewTransactionModal() {
    setisNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionsModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </>
  );
}

