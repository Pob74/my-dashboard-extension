import { useSettings } from "../context/SettingsContext"
import { BsCheckCircle, BsXCircle } from "react-icons/bs"
import { IoMdCloseCircleOutline } from "react-icons/io"

function Settings() {
  const {
    showSettings,
    setTakenBy,
    setImage,
    showSearch,
    setShowSearch,
    showQuote,
    setShowQuote,
    name,
    setName,
    showGreeting,
    setShowGreeting,
    showWeather,
    setShowWeather,
    showTime,
    setShowTime,
    showChangeBackground,
    setShowChangeBackground,
    searchEngine,
    setSearchEngine,
    temperatureUnit,
    setTemperatureUnit,
    setShowSettings,
    timeSize,
    setTimeSize,
    timeFont,
    setTimeFont
  } = useSettings()

  const handleOwnImage = (e) => {
    const file = e.target.files[0]

    // Convert the file to Base64 string
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result
      localStorage.setItem("image", base64String)
      setImage(base64String)
      setTakenBy("You")
    }
    reader.readAsDataURL(file)
  }

  const handleName = () => {
    localStorage.setItem("name", name)
    //   setNameEdit(false)
  }
  const handleChangeTimeFontSize = (timeSize) => {
    setTimeSize(timeSize)
    localStorage.setItem("timeSize", timeSize)
  }

  const handleChangeTimeFont = (timeFont) => {
    setTimeFont(timeFont)
    localStorage.setItem("timeFont", timeFont)
  }

  const handleShowSearch = () => {
    setShowSearch(!showSearch)
    localStorage.setItem("showSearch", showSearch)
  }

  const handleShowQuote = () => {
    setShowQuote(!showQuote)
    localStorage.setItem("showQuote", showQuote)
  }

  const handleShowGreeting = () => {
    setShowGreeting(!showGreeting)
    localStorage.setItem("showGreeting", showGreeting)
  }

  const handleShowWeather = () => {
    setShowWeather(!showWeather)
    localStorage.setItem("showWeather", showWeather)
  }

  const handleShowTime = () => {
    setShowTime(!showTime)
    localStorage.setItem("showTime", showTime)
  }
  const handleShowChangeBackground = () => {
    setShowChangeBackground(!showChangeBackground)
    localStorage.setItem("showChangeBackground", showChangeBackground)
  }

  const handleSearchEngineChange = (searchEngine) => {
    setSearchEngine(searchEngine)
    // Store the selected search engine in local storage
    localStorage.setItem("searchEngine", searchEngine)
  }

  const handleTemperatureUnitChange = (temperatureUnit) => {
    setTemperatureUnit(temperatureUnit)
    localStorage.setItem("temperatureUnit", temperatureUnit)
  }

  return (
    <div className="absolute text-white left-[5%] top-1/2 transform -translate-y-1/2 w-[350px] max-h-[700px] z-[1000] rounded-xl bg-gray-900 opacity-60 px-6 py-10">
      <div className="w-full h-full flex-col space-y-6">
        <div className="flex justify-between">
          <p className="underline font-bold">Settings</p>
          <IoMdCloseCircleOutline
            size={20}
            className="cursor-pointer"
            onClick={() => setShowSettings(!showSettings)}
          />
        </div>
        <div className="flex items-center gap-2">
          <p>Name:</p>
          <input
            className="bg-transparent w-[50%]"
            type="text"
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
          <BsCheckCircle onClick={handleName} className="cursor-pointer" />
        </div>

        <div
          onClick={handleShowSearch}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Search</p>
          {showSearch ? <BsCheckCircle /> : <BsXCircle />}
        </div>
        <div
          onClick={handleShowQuote}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Quote</p>
          {showQuote ? <BsCheckCircle /> : <BsXCircle />}
        </div>
        <div
          onClick={handleShowGreeting}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Greeting</p>
          {showGreeting ? <BsCheckCircle /> : <BsXCircle />}
        </div>
        <div
          onClick={handleShowWeather}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Weather</p>
          {showWeather ? <BsCheckCircle /> : <BsXCircle />}
        </div>

        <div className=" cursor-pointer flex items-center gap-4 w-full">
          <p>Temp Unit </p>
          <select
            className="bg-transparent"
            onChange={(e) => handleTemperatureUnitChange(e.target.value)}
            value={temperatureUnit}
          >
            <option className="bg-gray-700 opacity-60" value="Celsius">
              Celsius
            </option>
            <option className="bg-gray-700 opacity-60" value="Fahrenheit">
              Fahrenheit
            </option>
          </select>
        </div>

        <div
          onClick={handleShowTime}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Time</p>
          {showTime ? <BsCheckCircle /> : <BsXCircle />}
        </div>
        <div className=" cursor-pointer flex items-center gap-4 w-full">
          <p>Time size </p>
          <select
            className="bg-transparent"
            onChange={(e) => handleChangeTimeFontSize(e.target.value)}
            value={timeSize}
          >
            <option className="bg-gray-700 opacity-60" value="small">
              small
            </option>
            <option className="bg-gray-700 opacity-60" value="midium">
              midium
            </option>
            <option className="bg-gray-700 opacity-60" value="large">
              large
            </option>
            <option className="bg-gray-700 opacity-60" value="very large">
              very large
            </option>
          </select>
        </div>
        <div className=" cursor-pointer flex items-center gap-4 w-full">
          <p>Time font </p>
          <select
            className="bg-transparent"
            onChange={(e) => handleChangeTimeFont(e.target.value)}
            value={timeFont}
          >
            <option className="bg-gray-700 opacity-60" value="titan">
              titan
            </option>
            <option className="bg-gray-700 opacity-60" value="anton">
              anton
            </option>
            <option className="bg-gray-700 opacity-60" value="kumar">
              kumar
            </option>
            <option className="bg-gray-700 opacity-60" value="manrope">
              manrope
            </option>
            <option className="bg-gray-700 opacity-60" value="rubik">
              rubik
            </option>
          </select>
        </div>
        <div
          onClick={handleShowChangeBackground}
          className=" cursor-pointer flex items-center gap-4 w-full"
        >
          <p>Show Change Backround </p>
          {showChangeBackground ? <BsCheckCircle /> : <BsXCircle />}
        </div>
        <div className=" cursor-pointer flex items-center gap-4 w-full">
          <p>Search Engine </p>
          <select
            className="bg-transparent"
            onChange={(e) => handleSearchEngineChange(e.target.value)}
            value={searchEngine}
          >
            <option className="bg-gray-700 opacity-60" value="Google">
              Google
            </option>
            <option className="bg-gray-700 opacity-60" value="Bing">
              Bing
            </option>
            <option className="bg-gray-700 opacity-60" value="DuckDuckGo">
              DuckDuckGo
            </option>
          </select>
        </div>

        <div className=" cursor-pointer flex items-center gap-4 w-full">
          <p>Upload Image </p>
          <input
            type="file"
            onChange={handleOwnImage}
            title="Upload Image"
            placeholder="Upload Image"
          />
        </div>
      </div>
    </div>
  )
}

export default Settings
