import React, { useEffect, useState } from "react"
import axios from "axios"

function Temperature() {
  const [temperature, setTemperature] = useState(0)
  const [city, setCity] = useState("")
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY

  async function getTemperature() {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
      )
      setCity(response.data.location.name)
      setTemperature(response.data.current.temp_c)
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
      //   getTemperature()
    }
    const interval = setInterval(getTemperature, 3600000) // Fetch every hour (3600000 milliseconds)

    return () => {
      clearInterval(interval) // Clear interval on component unmount
    }
  }, [latitude, longitude])

  return (
    <div className="text-white">
      <h2 className=" text-xl">
        {city} <span>{temperature} C</span>
      </h2>
    </div>
  )
}

export default Temperature
