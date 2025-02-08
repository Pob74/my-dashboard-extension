import React, { useEffect, useState } from "react"
import quotes from "../quotes.json"

function Quotes() {
  const [quote, setQuote] = useState("")

  const getQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.quotes.length)
    console.log(quotes.quotes[randomIndex])
    setQuote(quotes.quotes[randomIndex])
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="mb-6 mx-auto max-w-[70%] text-white px-6 lg:px-0 flex items-center justify-center gap-4">
      <p className="quote text-[1.7rem]">{quote}</p>
    </div>
  )
}

export default Quotes
