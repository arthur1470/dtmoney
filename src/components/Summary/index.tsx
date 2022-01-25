import { useContext, useEffect, useState } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles'

export function Summary() {
    const [income, setIncome] = useState(0);
    const [outcome, setOutCome] = useState(0);
    const [total, setTotal] = useState(0);
    const { transactions } = useContext(TransactionsContext);
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{income}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>{outcome}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{total}</strong>
            </div>
        </Container>
    )
}