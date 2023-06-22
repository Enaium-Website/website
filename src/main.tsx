import React from "react"
import ReactDOM from "react-dom/client"
import "virtual:windi.css"
import App from "@/App.tsx"
import { HashRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
