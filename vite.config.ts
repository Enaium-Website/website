import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react-swc"
import WindiCSS from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
