import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { SettingsProvider } from "./context/SettingsContext"
import { TodoProvider } from "./context/TodoContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </SettingsProvider>
  </React.StrictMode>
)
