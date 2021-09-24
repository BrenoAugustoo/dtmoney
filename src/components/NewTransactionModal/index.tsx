import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';


import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal ( 
  { isOpen, onCloseNewTransactionModal  } : NewTransactionModalProps 
) {
  const { createTransaction } = useTransactions()

  const [title, setTitle ] = useState('');
  const [amount, setAmount ] = useState(0);
  const [category, setCategory ] = useState('');
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent ) {
    event.preventDefault();

    await createTransaction({
      title, 
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit')

    onCloseNewTransactionModal();
  }

  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onCloseNewTransactionModal} 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
        <button 
          type="button" 
          onClick={onCloseNewTransactionModal} 
          className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction} >
          <h2>Cadastrar transação</h2>

          <input 
            placeholder="Título"
            value={title}
            onChange={ event => setTitle(event.target.value)}
          />
        
          <input 
            placeholder="Valor"
            value={amount}
            onChange={ event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button" 
              onClick={() => { setType('deposit')}}
              isActive={type === 'deposit'}   
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" ></img>
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={type === 'withdraw'} 
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" ></img>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
            value={category}
            onChange={ event => setCategory(event.target.value)}
          />

          <button type="submit">
            Cadastrar 
          </button>
        </Container>
    </Modal>
  )
}