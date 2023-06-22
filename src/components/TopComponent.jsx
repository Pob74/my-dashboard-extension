import React, { useState, useEffect } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import Temperature from "./Temperature"

function TopComponent() {
  const [name, setName] = useState(localStorage.getItem("name") || "Name ")
  const [nameEdit, setNameEdit] = useState(false)

  const handleName = () => {
    localStorage.setItem("name", name)
    setNameEdit(false)
  }

  useEffect(() => {}, [])

  return (
    <div className="flex justify-between h-[20%]  p-12">
      <div>
        <h1 className="text-2xl text-white  font-bold drop-shadow-lg ">
          Have a great day,{" "}
          {!nameEdit ? (
            <span className="cursor-pointer" onClick={() => setNameEdit(true)}>
              {name}
            </span>
          ) : (
            <span>
              <input
                className="text-white w-[100px] bg-transparent cursor-pointer border-b-2 border-white mr-2 focus:outline-none "
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <button className="border" onClick={handleName} type="button">
                <AiOutlineEdit />
              </button>
            </span>
          )}
        </h1>
      </div>
      <Temperature />
    </div>
  )
}

export default TopComponent
