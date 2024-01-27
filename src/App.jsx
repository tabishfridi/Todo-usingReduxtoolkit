import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
    <h1>Make a list of todo</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
