import React from "react"
import { useTodo } from "../context/TodoContext"
import { AiOutlineDelete } from "react-icons/ai"

function TodoList() {
  const { todos, setTodos } = useTodo()

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <div className="absolute right-12 bottom-[10%] w-[350px] h-[auto] z-1000 bg-transparent p-6">
      <ul className="p-4 text-white">
        {todos?.map((todo) => (
          <li
            className="p-3 flex items-center justify-between flex-wrap mb-3 rounded-xl bg-gray-800 opacity-80"
            key={todo.id}
          >
            <span className="flex-1 text-xl break-all">{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="text-white hover:scale-110 transition-all duration-300"
            >
              <AiOutlineDelete className="text-xl" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
