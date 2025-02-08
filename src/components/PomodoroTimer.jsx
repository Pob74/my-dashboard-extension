import React, { useState, useEffect } from "react"
import { useSettings } from "../context/SettingsContext"
import deleteIcon from "../assets/del.svg"

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes
  const [isActive, setIsActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const { setTimerPomodore } = useSettings()

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(clockTimer)
  }, [])

  useEffect(() => {
    let timer
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      clearInterval(timer)
      alert("Pomodoro session is over!")
      resetTimer() // Important: Reset the timer when it reaches 0
    }
    return () => clearInterval(timer)
  }, [isActive, timeLeft])

  const toggleTimer = () => setIsActive(!isActive)
  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(25 * 60)
  }

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  const secondHandAngle = seconds * 6
  const minuteHandAngle = minutes * 6 + seconds * 0.1
  const hourHandAngle = (hours % 12) * 30 + minutes * 0.5

  const radius = 140 // Radius of the circle
  const circumference = 2 * Math.PI * radius
  const progress = ((25 * 60 + timeLeft) / (25 * 60)) * circumference // Calculate progress

  const timerMinutes = Math.floor(timeLeft / 60)
  const timerSeconds = timeLeft % 60

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center h-screen bg-gray-900/75 text-white">
      <div className="text-4xl font-bold mb-8">On Break</div>

      {}

      <div className="relative flex w-80 h-80">
        <svg className="absolute w-full h-full">
          <circle
            cx="150"
            cy="150"
            r={radius}
            stroke="#4CAF50"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
            transform={`rotate(${-90} 150 150)`}
          />
        </svg>

        {/* Clock Hands */}

        <svg className="absolute w-full h-full">
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="90"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            transform={`rotate(${hourHandAngle} 150 150)`}
            style={{ transition: "transform 0.1s linear" }}
          />

          {/* Minute Hand */}

          <line
            x1="150"
            y1="150"
            x2="150"
            y2="50"
            stroke="red"
            strokeWidth="6"
            strokeLinecap="round"
            transform={`rotate(${minuteHandAngle} 150 150)`}
            style={{ transition: "transform 0.1s linear" }}
          />

          {/* Second Hand */}

          <line
            x1="150"
            y1="150"
            x2="150"
            y2="20"
            stroke="yellow"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${secondHandAngle} 150 150)`}
            style={{ transition: "transform 0.1s linear" }}
          />
        </svg>
        <div className="absolute top-[56%] left-[47%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center text-6xl font-mono">
          {timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}:
          {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
        </div>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={toggleTimer}
          className={`px-6 py-3 text-xl rounded-full ${
            isActive ? "bg-amber-500" : "bg-green-500"
          } text-white transition duration-300 ease-in-out hover:opacity-80`}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-3 text-xl bg-gray-600 rounded-full text-white transition duration-300 ease-in-out hover:opacity-80"
        >
          Reset
        </button>
      </div>

      <img
        src={deleteIcon}
        onClick={() => setTimerPomodore("no")}
        alt="exit"
        className="w-12 h-12 cursor-pointer mt-6 transition duration-300 ease-in-out hover:opacity-80"
      />
    </div>
  )
}

export default PomodoroTimer
