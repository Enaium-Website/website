import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Routes } from "react-router-dom"
import Home from "@/pages/Home"
import MainLayout from "@/layouts/MainLayout"
import About from "@/pages/About"
import Minecraft from "@/pages/Minecraft"
import ModLayout from "@/layouts/ModLayout"
import StardewValley from "./pages/StardewValley"

const App = () => {
  const queryClinet = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClinet}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="mod" element={<ModLayout />}>
              <Route index element={<Minecraft />} />
              <Route path="stardew-valley" element={<StardewValley />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
