import React, { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddExpense({ ...formData, amount: parseFloat(formData.amount) })
    setFormData({ description: '', category: '', amount: '', date: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Enter expense description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Enter category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ExpenseForm
