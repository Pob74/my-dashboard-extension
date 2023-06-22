import React from "react"

function UnsplashImage({ image }) {
  return (
    <img
      src={image}
      alt="unsplash"
      className="object-cover w-full h-full relative"
    />
  )
}

export default UnsplashImage
