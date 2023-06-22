import React from "react"
import TopComponent from "./TopComponent"
import MiddleComponent from "./MiddleComponent"
import BottomComponent from "./BottomComponent"

function Content() {
  return (
    <div className="absolute w-full h-full  inset-0 z-30 flex-col">
      <TopComponent />
      <MiddleComponent />
      <BottomComponent />
    </div>
  )
}

export default Content
