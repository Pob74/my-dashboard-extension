import React, { useState, useEffect } from "react"
import { useSettings } from "../context/SettingsContext"
import deleteIcon from "../assets/del.svg"

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes
  const [isActive, setIsActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const { setTimerPomodore } = useSettings()

  // Update system clock every second
  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(clockTimer)
  }, [])

  // Pomodoro Timer Logic
  useEffect(() => {
    let timer
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      clearInterval(timer)
      alert("Pomodoro session is over!")
    }
    return () => clearInterval(timer)
  }, [isActive, timeLeft])

  const toggleTimer = () => setIsActive(!isActive)
  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(25 * 60)
  }

  // Get real system time
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  // Clock Hand Angles
  const secondHandAngle = seconds * 6
  const minuteHandAngle = minutes * 6 + seconds * 0.1
  const hourHandAngle = (hours % 12) * 30 + minutes * 0.5

  // Pomodoro Progress Circle
  const circlePercentage = (timeLeft / (25 * 60)) * 100
  const strokeDasharray = (circlePercentage * 2 * Math.PI * 150) / 100

  // Format Countdown Timer
  const timerMinutes = Math.floor(timeLeft / 60)
  const timerSeconds = timeLeft % 60

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center h-screen bg-gray-900/75 text-white">
      <div className="text-4xl font-bold mb-8">On Brake</div>

      <div className="relative w-80 h-80">
        {/* Clock Face */}
        <svg className="absolute w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="150"
            stroke="#2c3e50"
            strokeWidth="22"
            fill="none"
          />
        </svg>

        {/* Pomodoro Progress Circle */}
        <svg className="absolute w-full h-full transform rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="150"
            stroke="#ffffff"
            strokeWidth="12"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={-strokeDasharray}
            style={{ transition: "stroke-dasharray 0.1s linear" }}
          />
        </svg>

        {/* Clock Hands */}
        <svg className="absolute w-full h-full">
          {/* Hour Hand */}
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="90" // Adjust length from center
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

        {/* Digital Timer Display */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-mono">
          {timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}:
          {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
        </div>
      </div>

      {/* Buttons */}
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
