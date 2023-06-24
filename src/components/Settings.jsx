import React from "react"
import { useSettings } from "../context/SettingsContext"
import { BsCheckCircle, BsXCircle } from "react-icons/bs"

function Settings() {
  const { showSearch, setShowSearch, showQuote, setShowQuote, name, setName } =
    useSettings()

  const handleName = () => {
    localStorage.setItem("name", name)
    //   setNameEdit(false)
  }

  const handleShowSearch = () => {
    setShowSearch(!showSearch)
    localStorage.setItem("showSearch", showSearch)
  }

  const handleShowQuote = () => {
    setShowQuote(!showQuote)
    localStorage.setItem("showQuote", showQuote)
  }

  return (
    <div className="absolute text-white left-12 top-[35%] w-[300px]  h-[500px] z-1000 rounded-xl bg-gray-700 opacity-60 p-6">
      <div className="w-full h-full flex-col space-y-6">
        <div>
          <p className="text-center">Settings</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Name:</p>
          <input
            className="bg-transparent w-[50%]"
            type="text"
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
          <BsCheckCircle onClick={handleName} className="cursor-pointer" />
        </div>

        <div
          onClick={handleShowSearch}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Search</p>
          {showSearch ? <BsCheckCircle /> : <BsXCircle />}
        </div>
        <div
          onClick={handleShowQuote}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Quote</p>
          {showQuote ? <BsCheckCircle /> : <BsXCircle />}
        </div>
      </div>
    </div>
  )
}

export default Settings
