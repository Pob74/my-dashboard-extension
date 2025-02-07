import { useSettings } from "../context/SettingsContext"

const PomodoroNotification = () => {
  const { setTimerPomodore, timerPomodore } = useSettings()

  return (
    <>
      {timerPomodore === "no" && (
        <div
          onClick={() => setTimerPomodore("yes")}
          className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-transparent backdrop-blur-sm p-6 rounded-lg shadow-lg z-50 text-center cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">Tired!</h2>
          <p className="text-gray-300">Take a break!</p>
        </div>
      )}
    </>
  )
}

export default PomodoroNotification
