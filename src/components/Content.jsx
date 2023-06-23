import React from "react"
import TopComponent from "./TopComponent"
import MiddleComponent from "./MiddleComponent"
import BottomComponent from "./BottomComponent"
import { useSettings } from "../context/SettingsContext"
import Settings from "./Settings"

function Content({ setImage, image }) {
  const { showSettings } = useSettings()

  console.log(showSettings)
  return (
    <div className="absolute w-full h-full  inset-0 z-30 flex-col">
      <TopComponent />
      <MiddleComponent />
      <BottomComponent setImage={setImage} image={image} />
      {showSettings && <Settings />}
    </div>
  )
}

export default Content
