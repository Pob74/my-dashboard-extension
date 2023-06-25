import React, { useState } from "react"
import { MdOutlineCancel, MdOutlineSettings } from "react-icons/md"
import axios from "axios"
import TodoModal from "./TodoModal"
import { AiOutlineCheck } from "react-icons/ai"
import { BsCheckCircle, BsXCircle } from "react-icons/bs"
import { useSettings } from "../context/SettingsContext"

function BottomComponent() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const baseUrl = process.env.REACT_APP_BASE_URL

  const {
    showSettings,
    setShowSettings,
    setImage,
    setTakenBy,
    takenBy,
    showChangeBackground
  } = useSettings()

  const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY

  const getNewImage = async () => {
    try {
      const response = await axios.get(`${baseUrl}${query}`)

      setTakenBy(response.data.user.name)
      setImage(response.data.urls.full)
      localStorage.setItem("takenBy", response.data.user.name)
      localStorage.setItem("image", response.data.urls.regular)

      setIsOpen(false)
      setQuery("")
    } catch (error) {
      console.log(error)
    }
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className="h-[20%]  flex justify-between text-white items-end p-12 border-spacing-1 ">
      <div className="flex items-center w-[33%] ">
        {takenBy !== "You" && (
          <p>
            By:
            <span>{takenBy}</span>
          </p>
        )}
        <MdOutlineSettings
          className="ml-2 cursor-pointer"
          onClick={() => setShowSettings(!showSettings)}
        />
      </div>
      {!isOpen ? (
        <div className="w-[33%] flex justify-center ">
          {showChangeBackground && (
            <p className="cursor-pointer " onClick={() => setIsOpen(true)}>
              New Background
            </p>
          )}
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            className="rounded-lg p-2 mt-2 mr-2 text-white bg-[rgb(1,14,14)] opacity-60"
            placeholder="Query or get random"
          />
          <button onClick={getNewImage}>
            <BsCheckCircle />
          </button>
          <button onClick={() => setIsOpen(false)} className="ml-2">
            <BsXCircle />
          </button>
        </div>
      )}
      <div className="w-[33%] flex justify-end  ">
        {!modalIsOpen ? (
          <p
            className="cursor-pointer"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            TODO
          </p>
        ) : (
          <TodoModal setModalIsOpen={setModalIsOpen} />
        )}
      </div>
      {/* {modalIsOpen && <TodoModal />} */}
    </div>
  )
}

export default BottomComponent

// `https://api.unsplash.com/photos/random?orientation=landscape&quary=cars&client_id=${apiKey}`
