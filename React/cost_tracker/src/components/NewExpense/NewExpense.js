import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const onSaveExpenseDateHandler = enteredExpenseDate => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
