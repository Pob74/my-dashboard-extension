import React, { useEffect, useState } from "react"
import Quotes from "./Quotes"
import { useSettings } from "../context/SettingsContext"

function MiddleComponent() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  const { showSearch, showQuote } = useSettings()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      )
    }, 1000)

    return () => {
      clearInterval(interval) // Clear interval on component unmount
    }
  }, [])

  return (
    <div className="h-[60%] text-white flex justify-center items-end ">
      <div className="text-center mt-36 w-full">
        <div className="mb-6">
          <h2 className="time text-6xl font-bold  ">
            {time} <span>PM</span>
          </h2>
        </div>
        {showQuote && <Quotes />}
        {showSearch && (
          <div className="mb-6">
            <input
              className="w-[250px] rounded-xl p-2 mt-4 text-center bg-[rgb(1,14,14)] opacity-60  border border-white focus:outline-none "
              type="text"
              placeholder="Search on Google"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default MiddleComponent
