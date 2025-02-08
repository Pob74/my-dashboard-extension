import Temperature from "./Temperature"
import { useSettings } from "../context/SettingsContext"
import { useEffect, useState } from "react"
import PomodoroNotification from "./PomodoroNotification"

function TopComponent() {
  const { name, showGreeting, showWeather } = useSettings()
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour >= 0 && currentHour < 6) {
      setGreeting("Time to sleep")
    } else if (currentHour >= 6 && currentHour < 12) {
      setGreeting("Good morning")
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon")
    } else {
      setGreeting("Good evening")
    }
  }, [])

  return (
    <div className="flex justify-between h-[20%]  p-12">
      <div>
        {showGreeting && (
          <h1 className="text-2xl text-white  font-bold drop-shadow-lg tracking-wider  ">
            {greeting}, <span className="text-2xl font-extrabold">{name}</span>
          </h1>
        )}
      </div>
      <PomodoroNotification />
      {showWeather && <Temperature />}
    </div>
  )
}

export default TopComponent
