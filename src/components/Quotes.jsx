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
    <div className="mb-6 max-w-[700px] text-white">
      <p className="quote text-xl">{quote}</p>
    </div>
  )
}

export default Quotes
