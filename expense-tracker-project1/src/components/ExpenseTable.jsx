import React from 'react'

function ExpenseTable({ expenses, onDeleteExpense, onSort, sortBy, sortOrder }) {
  const renderSortArrow = (field) => {
    if (sortBy !== field) return ''
    return sortOrder === 'asc' ? ' ↑' : ' ↓'
  }

  return (
    <div className="table-wrapper">
      <table className="expense-table">
        <thead>
          <tr>
            <th onClick={() => onSort('description')}>
              Description{renderSortArrow('description')}
            </th>
            <th onClick={() => onSort('category')}>
              Category{renderSortArrow('category')}
            </th>
            <th onClick={() => onSort('amount')}>
              Amount{renderSortArrow('amount')}
            </th>
            <th onClick={() => onSort('date')}>
              Date{renderSortArrow('date')}
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => onDeleteExpense(expense.id)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseTable
