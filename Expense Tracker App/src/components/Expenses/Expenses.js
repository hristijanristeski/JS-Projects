import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";


// expenses array

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");

  const selectedYearHandler = (year) => {
    setFilteredYear(year);
  };

  // filtering the array based on the selected year; filteredExpenses is the new array, it holds only the filtered item (based on the year)
  // Now, this array is passed bellow to the map function
  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "All") {
      return props.items;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={selectedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
