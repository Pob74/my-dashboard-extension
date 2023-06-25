// create context

import React, { createContext, useState, useContext, useEffect } from "react"

export const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [image, setImage] = useState(
    localStorage.getItem("image") ||
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  )
  const [takenBy, setTakenBy] = useState(
    localStorage.getItem("takenBy") || "Ken Cheung"
  )

  const [name, setName] = useState(localStorage.getItem("name") || "Name ")

  const [searchEngine, setSearchEngine] = useState(
    localStorage.getItem("searchEngine") || "Google"
  )

  const [showSettings, setShowSettings] = useState(
    JSON.parse(localStorage.getItem("showSettings")) || false
  )
  const [showSearch, setShowSearch] = useState(
    JSON.parse(localStorage.getItem("showSearch")) || false
  )
  const [showQuote, setShowQuote] = useState(
    JSON.parse(localStorage.getItem("showQuote")) || false
  )

  const [showGreeting, setShowGreeting] = useState(
    JSON.parse(localStorage.getItem("showGreeting")) || false
  )

  const [showWeather, setShowWeather] = useState(
    JSON.parse(localStorage.getItem("showWeather")) || false
  )

  const [showTime, setShowTime] = useState(
    JSON.parse(localStorage.getItem("showTime")) || false
  )

  const [showChangeBackground, setShowChangeBackground] = useState(
    JSON.parse(localStorage.getItem("showChangeBackground")) || false
  )

  const [temperatureUnit, setTemperatureUnit] = useState(
    localStorage.getItem("temperatureUnit") || "C"
  )

  useEffect(() => {
    localStorage.setItem("name", name)
    localStorage.setItem("image", image)
    localStorage.setItem("takenBy", takenBy)
    localStorage.setItem("searchEngine", searchEngine)
    localStorage.setItem("temperatureUnit", temperatureUnit)
  }, [name, image, takenBy, searchEngine, temperatureUnit])

  useEffect(() => {
    localStorage.setItem("showSettings", JSON.stringify(showSettings))
    localStorage.setItem("showSearch", JSON.stringify(showSearch))
    localStorage.setItem("showQuote", JSON.stringify(showQuote))
    localStorage.setItem("showGreeting", JSON.stringify(showGreeting))
    localStorage.setItem("showWeather", JSON.stringify(showWeather))
    localStorage.setItem("showTime", JSON.stringify(showTime))
    localStorage.setItem(
      "showChangeBackground",
      JSON.stringify(showChangeBackground)
    )
  }, [
    showSettings,
    showSearch,
    showQuote,
    showGreeting,
    showWeather,
    showTime,
    showChangeBackground
  ])

  return (
    <SettingsContext.Provider
      value={{
        image,
        setImage,
        showSettings,
        setShowSettings,
        showSearch,
        setShowSearch,
        showQuote,
        setShowQuote,
        name,
        setName,
        takenBy,
        setTakenBy,
        showGreeting,
        setShowGreeting,
        showWeather,
        setShowWeather,
        showTime,
        setShowTime,
        showChangeBackground,
        setShowChangeBackground,
        searchEngine,
        setSearchEngine,
        temperatureUnit,
        setTemperatureUnit
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
