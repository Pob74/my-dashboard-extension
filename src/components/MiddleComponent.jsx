import React, { useEffect, useState } from "react"
import Quotes from "./Quotes"

function MiddleComponent() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

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
    <div className="h-[60%] text-white flex justify-center items-center  ">
      <div className="text-center mt-36 ">
        <div className="mb-6">
          <h2 className="time text-6xl font-bold  ">
            {time} <span>PM</span>
          </h2>
        </div>
        <Quotes />
        <div className="mb-6">
          <input
            className="w-[250px] rounded-xl p-2 mt-4 text-center bg-transparent  border border-white focus:outline-none "
            type="text"
            placeholder="Search on Google"
          />
        </div>
      </div>
    </div>
  )
}

export default MiddleComponent
