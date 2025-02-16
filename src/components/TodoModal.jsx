import React, { useState } from "react"
import { BsCheckCircle, BsXCircle } from "react-icons/bs"
import { useTodo } from "../context/TodoContext"

function TodoModal({ setModalIsOpen }) {
  const [inputValue, setInputValue] = useState("")

  const { todos, setTodos } = useTodo()

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      // Handle adding the todo item
      // 1. Create a new todo object
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: inputValue
      }
      setTodos([...todos, newTodo])

      localStorage.setItem("todos", JSON.stringify(newTodo))
      setModalIsOpen(false)
      setInputValue("") // Clear the input field after adding the todo
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo()
    }
  }

  return (
    <div className=" w-[300px]  flex justify-end items-center">
      <div className="w-[70%]">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add Todo"
          className="rounded-full p-2 mt-2 mr-2 text-white bg-[rgb(1,14,14)] opacity-60"
        />
      </div>
      <div className="w-[10%] flex gap-3 items-center ">
        <button onClick={handleAddTodo}>
          <BsCheckCircle className="cursor-pointer text-xl" />
        </button>
        <button onClick={() => setModalIsOpen(false)}>
          <BsXCircle className="cursor-pointer text-xl" />
        </button>
      </div>
    </div>
  )
}

export default TodoModal
