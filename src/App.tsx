import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'
import Modal from 'react-modal'
import { GlobalStyle } from './globals/global'
import { useState } from 'react'

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTrasactionModalOpen(true)
  }
  
  function handleCloseNewTransactionModal() {
      setIsNewTrasactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />   
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />   

      <GlobalStyle />
    </>
  );
}