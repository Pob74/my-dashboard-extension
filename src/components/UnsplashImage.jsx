import React from "react"
import { useSettings } from "../context/SettingsContext"

function UnsplashImage() {
  const { image } = useSettings()
  return (
    <img
      src={image}
      alt="unsplash"
      className="object-cover w-full h-full relative "
    />
  )
}

export default UnsplashImage
