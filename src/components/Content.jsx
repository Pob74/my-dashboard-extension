import React from "react"
import TopComponent from "./TopComponent"
import MiddleComponent from "./MiddleComponent"
import BottomComponent from "./BottomComponent"
import { useSettings } from "../context/SettingsContext"
import Settings from "./Settings"
import TodoList from "./TodoList"

function Content() {
  const { showSettings } = useSettings()

  console.log(showSettings)
  return (
    <div className="absolute w-full h-full  inset-0 z-30 flex-col">
      <TopComponent />
      <MiddleComponent />
      <BottomComponent />
      <TodoList />
      {showSettings && <Settings />}
    </div>
  )
}

export default Content
