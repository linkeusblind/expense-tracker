import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Dinner',
    amount: '94',
    date: new Date(2021, 6, 14)
  },
  {
    id: 'e2',
    title: 'Shopping',
    amount: '50',
    date: new Date(2021, 5, 30)
  },
  {
    id: 'e3',
    title: 'Cosmetics',
    amount: '60',
    date: new Date(2021, 3, 15)
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
    // console.log('In App.js')
    // console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
      />
    </div>
  );
}

export default App;
