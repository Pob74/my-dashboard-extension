// create context

import React, { createContext, useState, useContext } from "react"

export const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [image, setImage] = useState(
    localStorage.getItem("image") ||
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  )
  const [showSettings, setShowSettings] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <SettingsContext.Provider
      value={{
        image,
        setImage,
        showSettings,
        setShowSettings,
        showSearch,
        setShowSearch
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
