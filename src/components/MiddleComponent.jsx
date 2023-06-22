import React from "react"

function MiddleComponent() {
  return (
    <div className="h-[60%] text-white flex justify-center items-center  ">
      <div className="text-center mt-36 ">
        <div className="mb-6">
          <h2 className="text-6xl font-bold">
            12:49 <span>PM</span>
          </h2>
        </div>
        <div className="mb-6">
          <p>Some quote comes here</p>
        </div>
        <div className="mb-6">
          <input
            className="w-[250px] rounded-lg p-2 mt-4 text-center"
            type="text"
            placeholder="Search on Google"
          />
        </div>
      </div>
    </div>
  )
}

export default MiddleComponent
