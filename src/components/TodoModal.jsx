import React from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { BsCheckCircle } from "react-icons/bs"

function TodoModal() {
  return (
    <div className="absolute top-[80%] right-0 w-[300px] mr-6 flex">
      <div className="w-[70%]">
        <input type="text" placeholder="Add Todo" />
      </div>
      <div className="w-[30%]  flex gap-3 items-center ">
        <button>
          <BsCheckCircle />
        </button>
        {/* <button>
          <AiOutlineEdit />
        </button>
        <button>
          <AiOutlineDelete />
        </button> */}
      </div>
    </div>
  )
}

export default TodoModal
