// create todo context

import React, { createContext, useState, useContext, useEffect } from "react"

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  )

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  return useContext(TodoContext)
}

// JSON.parse(localStorage.getItem("todos"))
