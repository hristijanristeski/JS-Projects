import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isShowingExpenseForm, setIsShowingExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShowingExpenseForm(false);
  };

  const startEditingHandler = () => {
    setIsShowingExpenseForm(true);
  };

  const stopEditingHandler = () => {
    setIsShowingExpenseForm(false);
  };
  return (
    <div className="new-expense">
      {!isShowingExpenseForm ? (
        <button onClick={startEditingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
