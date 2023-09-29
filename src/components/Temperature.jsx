import React, { useEffect, useState } from "react"
import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri"
import axios from "axios"
import { useSettings } from "../context/SettingsContext"

function Temperature() {
  const [temperature, setTemperature] = useState(0)
  const [city, setCity] = useState("")
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [icon, setIcon] = useState(localStorage.getItem("icon") || "")
  const [feeling, setFeeling] = useState("")

  const { temperatureUnit } = useSettings()

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const baseUrl = process.env.REACT_APP_BASE_URL_WEATHER

  async function getTemperature() {
    try {
      const response = await axios.get(
        `${baseUrl}${apiKey}&q=${latitude},${longitude}`
      )
      console.log(response.data)
      setCity(response.data.location.name)
      setTemperature(response.data.current.temp_c)
      const iconResponse = `https:${response.data.current.condition.icon}`
      setIcon(iconResponse)
      localStorage.setItem("icon", iconResponse)
      setFeeling(response.data.current.feelslike_c)
      console.log(response.data.current.feelslike_c)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (navigator.geolocation) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          })
          const { latitude, longitude } = position.coords
          setLatitude(latitude)
          setLongitude(longitude)
        } else {
          console.error("Geolocation is not supported by this browser.")
        }
      } catch (error) {
        console.error("Error retrieving current position:", error)
      }
    }

    fetchLocation()
  }, [])

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getTemperature()
    }
    const interval = setInterval(getTemperature, 3600000) // Fetch every hour (3600000 milliseconds)

    return () => {
      clearInterval(interval) // Clear interval on component unmount
    }
  }, [latitude, longitude])

  const displayTemperature = () => {
    if (temperatureUnit === "Celsius") {
      return temperature
    } else {
      return (temperature * (9 / 5) + 32).toFixed(2)
    }
  }

  const displayFeelsLike = () => {
    if (temperatureUnit === "Celsius") {
      return feeling
    } else {
      return (feeling * (9 / 5) + 32).toFixed(2)
    }
  }

  return (
    <div className="text-white ">
      <div className="flex">
        <h2 className=" text-xl ">
          {city} <span>{displayTemperature()}</span>
        </h2>
        {temperatureUnit === "Celsius" ? (
          <RiCelsiusFill />
        ) : (
          <RiFahrenheitFill />
        )}
      </div>
      <div className="flex">
        <img src={icon} alt="" className="w-[50px] h-[50px]" />

        <div className="text-[10px]">
          <p className="font-sm text-white">Feels like: {displayFeelsLike()}</p>
        </div>
      </div>
    </div>
  )
}

export default Temperature
