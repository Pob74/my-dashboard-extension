import Temperature from "./Temperature"
import { useSettings } from "../context/SettingsContext"

function TopComponent() {
  const { name, showGreeting, showWeather } = useSettings()

  return (
    <div className="flex justify-between h-[20%]  p-12">
      <div>
        {showGreeting && (
          <h1 className="text-2xl text-white  font-bold drop-shadow-lg ">
            Have a great day,{" "}
            <span className="text-2xl font-extrabold">{name}</span>
          </h1>
        )}
      </div>
      {showWeather && <Temperature />}
    </div>
  )
}

export default TopComponent
