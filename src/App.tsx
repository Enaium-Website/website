import { Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import MainLayout from "@/layouts/MainLayout"
import About from "@/pages/About"
import Mod from "@/pages/Mod"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mod" element={<Mod />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
