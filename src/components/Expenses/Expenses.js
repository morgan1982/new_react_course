import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


const Expenses = ({expenses}) => {
  const [year, setYear] = useState('2020')
  const handleFilterChange = ({target: {value : date}}) => {
    setYear(date);
  }

  const filteredExpenses = expenses.filter(({date}) => {
    const expenseDate = date.getFullYear().toString();
    return expenseDate === year;
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter 
        onFilterChange={handleFilterChange}
        year={year}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses;