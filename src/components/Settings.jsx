import React from "react"
import { useSettings } from "../context/SettingsContext"
import { BsCheckCircle, BsXCircle } from "react-icons/bs"

function Settings() {
  const { showSearch, setShowSearch } = useSettings()
  return (
    <div className="absolute text-white left-12 top-[30%] w-[300px]  h-[500px] z-1000 rounded-xl bg-gray-700 opacity-60 p-6">
      <div className="w-full h-full ">
        <p className="text-center">Settings</p>
        <div
          onClick={() => setShowSearch(!showSearch)}
          className="py-4 cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Search</p>
          {showSearch ? <BsCheckCircle /> : <BsXCircle />}
        </div>
      </div>
    </div>
  )
}

export default Settings
