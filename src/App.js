import React, { useEffect, useState } from "react"
import Content from "./components/Content"
import UnsplashImage from "./components/UnsplashImage"
import axios from "axios"

function App() {
  const [image, setImage] = useState(
    localStorage.getItem("image") ||
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  )

  return (
    <div className="w-screen h-screen ">
      <UnsplashImage image={image} />
      <Content setImage={setImage} image={image} />
    </div>
  )
}

export default App
