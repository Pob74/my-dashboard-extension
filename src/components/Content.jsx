import React from "react"
import TopComponent from "./TopComponent"
import MiddleComponent from "./MiddleComponent"
import BottomComponent from "./BottomComponent"
import { useSettings } from "../context/SettingsContext"
import Settings from "./Settings"
import TodoList from "./TodoList"
import { useTodo } from "../context/TodoContext"
import PomodoroTimer from "./PomodoroTimer"

function Content() {
  const { showSettings, timerPomodore } = useSettings()
  const { todos } = useTodo()

  return (
    <div className="absolute w-full h-full  inset-0 z-30 flex-col">
      <TopComponent />
      <MiddleComponent />
      <BottomComponent />
      {todos?.length > 0 && <TodoList />}
      {showSettings && <Settings />}
      {timerPomodore === "yes" && <PomodoroTimer />}
    </div>
  )
}

export default Content
