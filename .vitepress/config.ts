import path from "path"
import { defineConfig } from "vitepress"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import WindiCSS from "vite-plugin-windicss"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Enaium's Website",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Mod", link: "/mod" },
    ]
  },
  vite: {
    plugins: [vue(), vueJsx(), WindiCSS()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../.vitepress")
      }
    }
  }
})
