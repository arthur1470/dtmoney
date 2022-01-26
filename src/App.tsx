import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'
import Modal from 'react-modal'
import { GlobalStyle } from './globals/global'
import { useState } from 'react'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal() {
      setIsNewTrasactionModalOpen(true)
  }
  
  function handleCloseNewTransactionModal() {
      setIsNewTrasactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />   
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />   

      <GlobalStyle />
    </TransactionsProvider>
  );
}