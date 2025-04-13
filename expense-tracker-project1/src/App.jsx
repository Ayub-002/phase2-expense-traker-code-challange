import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Light Mumu', category: 'food', amount: 100, date: '2025-04-08' },
    { id: 2, description: 'NYC taxes', category: 'utilities', amount: 2000, date: '2025-04-05' },
    { id: 3, description: 'Buy shoes', category: 'personal', amount: 5000, date: '2025-04-06' },
    { id: 4, description: 'Buy book', category: 'growth', amount: 10000, date: '2025-04-07' },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortBy) return 0
      const aVal = a[sortBy]
      const bVal = b[sortBy]
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1
      } else {
        return aVal < bVal ? 1 : -1
      }
    })

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Add Expense</h2>
        <ExpenseForm onAddExpense={addExpense} />
      </aside>
      <main className="main">
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances with this tracker.</p>
        <SearchBar onSearch={setSearchTerm} />
        <ExpenseTable
          expenses={filteredExpenses}
          onDeleteExpense={deleteExpense}
          onSort={handleSort}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </main>
    </div>
  )
}

export default App
