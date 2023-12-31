import React, { useEffect, useState } from "react"
import Quotes from "./Quotes"
import { useSettings } from "../context/SettingsContext"
import { AiOutlineGoogle } from "react-icons/ai"
import { BiLogoBing } from "react-icons/bi"

function MiddleComponent() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [searchQuery, setSearchQuery] = useState("")

  const { showSearch, showQuote, showTime, searchEngine } = useSettings()

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

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim() !== "") {
      let searchURL = ""

      switch (searchEngine) {
        case "Google":
          searchURL = `https://www.google.com/search?q=${encodeURIComponent(
            searchQuery
          )}`
          break
        case "Bing":
          searchURL = `https://www.bing.com/search?q=${encodeURIComponent(
            searchQuery
          )}`
          break

        case "DuckDuckGo":
          searchURL = `https://duckduckgo.com/?q=${encodeURIComponent(
            searchQuery
          )}`
          break
        default:
          searchURL = `https://www.google.com/search?q=${encodeURIComponent(
            searchQuery
          )}`
          break
      }

      window.location.href = searchURL
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }

  return (
    <div className="h-[60%] text-white flex justify-center items-end ">
      <div className="text-center mt-36 w-full">
        <div className="mb-6">
          {showTime && (
            <h2 className="time text-6xl font-bold  ">
              {time} <span>PM</span>
            </h2>
          )}
        </div>
        {showQuote && <Quotes />}
        {showSearch && (
          <div className="mb-6">
            <div>
              <input
                className="w-[250px] rounded-full p-2 mt-4 text-center bg-[rgb(1,14,14)] opacity-60 focus:opacity-80 hover:cursor-pointer  border border-white focus:outline-none"
                type="text"
                placeholder={`Search on ${searchEngine}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MiddleComponent
