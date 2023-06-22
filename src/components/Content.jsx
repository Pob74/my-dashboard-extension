import React from "react"
import TopComponent from "./TopComponent"
import MiddleComponent from "./MiddleComponent"
import BottomComponent from "./BottomComponent"

function Content({ setImage, image }) {
  return (
    <div className="absolute w-full h-full  inset-0 z-30 flex-col">
      <TopComponent />
      <MiddleComponent />
      <BottomComponent setImage={setImage} image={image} />
    </div>
  )
}

export default Content
