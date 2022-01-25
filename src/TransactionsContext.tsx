import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'  >;
type TransactionInput = Omit<Transaction, 'id' | 'createdAt' >;

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider(props:TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(()=> {
        api.get('transactions')            
            .then(response => setTransactions(response.data.transactions));        
    }, []); 

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }} >
            {props.children}
        </TransactionsContext.Provider>
    )
}