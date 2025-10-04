import { StrictMode, useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import "./index.css"
import Loader from "./components/Loader/Loader"
import App from "./App"

function Root() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return showLoader ? <Loader /> : <App />
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
  </StrictMode>
)
