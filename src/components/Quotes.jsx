import React, { useEffect, useState } from "react"
import axios from "axios"

function Quotes() {
  const [quote, setQuote] = useState("")

  const getQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random")
      setQuote(response.data.content)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="mb-6 mx-auto max-w-[70%] text-white px-6 lg:px-0">
      <p className="quote text-[1.5rem]">{quote}</p>
    </div>
  )
}

export default Quotes
